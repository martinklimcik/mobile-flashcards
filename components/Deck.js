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
import { startQuiz } from "../actions/quiz";
import globalStyle from "../style";
import { formatNoun } from "../utils/helpers";
import CustomButton from "./Button";

class Deck extends Component {
  startQuiz = () => {
    this.props.dispatch(startQuiz(this.props.deck.cards));
    this.props.navigation.navigate("Quiz");
  };

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.deck}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>
          {formatNoun(deck.cards.length, "card")}
        </Text>
        <CustomButton
          text="Add Card"
          onPress={() =>
            navigation.navigate("Add Card", { deckId: deck.title })
          }
        />
        <CustomButton
          text="Start Quiz"
          onPress={this.startQuiz}
          disabled={deck.cards.length === 0}
          buttonStyle={styles.quizBtn}
          textStyle={styles.quizBtnText}
        />
      </View>
    );
  }
}

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
  quizBtn: {
    ...globalStyle.button,
    backgroundColor: "#00539CFF",
  },
  quizBtnText: {
    ...globalStyle.buttonText,
    color: "#EEA47FFF",
  },
});

function mapStateToProps({ decks }, { route }) {
  return { deck: decks[route.params.deckId] };
}

export default connect(mapStateToProps)(Deck);
