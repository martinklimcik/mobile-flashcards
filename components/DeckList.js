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

const Decks = ({ showDeck }) => {
  const decks = getAllDecks();
  let deckList = [];
  for (id of Object.keys(decks)) {
    deckList.push({
      id,
      title: decks[id].title,
      cardCount: decks[id].cards.length,
    });
  }

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback onPress={() => showDeck(item.id)}>
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text>{item.cardCount} cards</Text>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View>
      <FlatList
        data={deckList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

class DeckList extends Component {
  showDeck = (deckId) => {
    this.props.navigation.navigate("Deck", { deckId });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>DECK LIST</Text>
        <Decks showDeck={this.showDeck} />
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
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default connect()(DeckList);
