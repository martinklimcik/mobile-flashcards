import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TouchableNativeFeedback,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getAllDecks } from "../utils/api";
import { receiveDecks } from "../actions/decks";
import { formatNoun } from "../utils/helpers";
import CustomButton from "./Button";

class DeckList extends Component {
  componentDidMount() {
    getAllDecks().then((decks) => {
      this.props.dispatch(receiveDecks(decks));
    });
  }

  showDeck = (deckId) => {
    this.props.navigation.navigate("Deck", { deckId });
  };

  renderDeck = ({ item }) => (
    <TouchableNativeFeedback onPress={() => this.showDeck(item.id)}>
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.deckInfo}>
          {formatNoun(item.cardCount, "card")}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );

  render() {
    const { navigation, decks } = this.props;
    let deckList = [];
    for (id of Object.keys(decks)) {
      deckList.push({
        id,
        title: decks[id].title,
        cardCount: decks[id].cards.length,
      });
    }

    return (
      <View>
        <CustomButton
          onPress={() => navigation.navigate("Add Deck")}
          text="Create New Deck"
        />
        {deckList.length > 0 ? (
          <FlatList
            data={deckList}
            renderItem={this.renderDeck}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.deckInfo}>There are no existing decks</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "white",
    textDecorationColor: "#00539CFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  deckTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  deckInfo: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);
