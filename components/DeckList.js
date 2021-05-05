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
import { getAllDecks, resetStorage } from "../utils/api";
import { receiveDecks } from "../actions/decks";

class DeckList extends Component {
  componentDidMount() {
    getAllDecks().then((decks) => {
      console.log("**************************************************");
      console.log(decks);
      console.log(this.props.decks);
      console.log("**************************************************");
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
        <Text>{item.cardCount} cards</Text>
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
      //console.log(id);
      deckList.push({
        id,
        title: decks[id].title,
        cardCount: decks[id].cards.length,
      });
    }

    return (
      <View>
        <FlatList
          data={deckList}
          renderItem={this.renderDeck}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Create New Deck"
          onPress={() => navigation.navigate("Add Deck")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    margin: 5,
    padding: 5,
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);
