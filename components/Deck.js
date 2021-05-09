import React, { useState } from "react";
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
  Alert,
} from "react-native";
import { startQuiz } from "../actions/quiz";
import globalStyle from "../style";
import { formatNoun } from "../utils/helpers";
import CustomButton from "./Button";
import { deleteDeck } from "../actions/decks";
import { removeDeck } from "../utils/api";

const Deck = ({ navigation, deck, dispatch }) => {
  if (deck == null) return null;
  const cardCount = deck.cards.length;

  const handleStartQuiz = () => {
    dispatch(startQuiz(deck.cards));
    navigation.navigate("Quiz");
  };

  const _deleteDeck = () => {
    navigation.pop();
    removeDeck(deck.title);
    dispatch(deleteDeck(deck.title));
  };

  const handleDeleteDeck = () => {
    Alert.alert(
      "Delete deck",
      `Are you sure you want to delete deck ${deck.title} ${
        cardCount > 0 ? " and its " + formatNoun(cardCount, "card") : ""
      }?`,
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: _deleteDeck,
        },
      ]
    );
  };

  return (
    <View style={styles.deck}>
      <Text style={styles.title}>{deck.title}</Text>

      <Text style={styles.count}>{formatNoun(cardCount, "card")}</Text>
      <CustomButton
        text="Add Card"
        onPress={() => navigation.navigate("Add Card", { deckId: deck.title })}
      />
      <CustomButton
        text="Delete deck"
        onPress={handleDeleteDeck}
        buttonStyle={globalStyle.buttonRed}
      />
      <CustomButton
        text="Start Quiz"
        onPress={handleStartQuiz}
        disabled={cardCount === 0}
        buttonStyle={globalStyle.buttonBlue}
        textStyle={globalStyle.buttonTextBlue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 0,
    alignItems: "stretch",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  count: {
    fontSize: 23,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 20,
  },
});

function mapStateToProps({ decks }, { route }) {
  return { deck: decks[route.params.deckId] };
}

export default connect(mapStateToProps)(Deck);
