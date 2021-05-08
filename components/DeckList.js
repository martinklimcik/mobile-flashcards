import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Animated,
} from "react-native";
import { getAllDecks } from "../utils/api";
import { receiveDecks } from "../actions/decks";
import globalStyle from "../style";
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
    console.log("======== DeckList.render");
    console.log(decks);
    console.log(typeof decks);
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
        <FlatList
          data={deckList}
          renderItem={this.renderDeck}
          keyExtractor={(item) => item.id}
        />
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
