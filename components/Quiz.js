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
import { nextQuestion, startQuiz } from "../actions/quiz";
import globalStyle from "../style";

const Quiz = ({ quiz, navigation, dispatch }) => {
  const [flipped, flipCard] = React.useState(false);

  const index = quiz.current + 1;
  const total = quiz.cards.length;
  const card = quiz.cards[quiz.current];

  function handleAnswer(answer) {
    flipCard(false);
    dispatch(nextQuestion(answer));
  }

  function backToDeck() {
    navigation.pop();
  }

  return index <= total ? (
    <View>
      {!flipped ? (
        <TouchableNativeFeedback onPress={() => flipCard(true)}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{card.question}</Text>
            <Text style={styles.cardInfo}>tap to view answer</Text>
          </View>
        </TouchableNativeFeedback>
      ) : (
        <View>
          <View style={styles.card}>
            <Text style={styles.cardText}>{card.answer}</Text>
          </View>
          <TouchableOpacity onPress={() => handleAnswer(true)}>
            <View style={[globalStyle.button, styles.rightButton]}>
              <Text style={[globalStyle.buttonText]}>Correct</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAnswer(false)}>
            <View style={[globalStyle.button, styles.wrongButton]}>
              <Text style={[globalStyle.buttonText]}>Incorrect</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text style={styles.progress}>
          Question {index} of {total}
        </Text>
        <TouchableOpacity
          onPress={backToDeck}
          style={[globalStyle.button, styles.button]}
        >
          <Text style={[globalStyle.buttonText, styles.buttonText]}>
            Stop Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.resultHeader}>Results</Text>
      <Text style={styles.resultText}>Correct Answers: {quiz.right}</Text>
      <Text style={styles.resultText}>Incorrect Answers: {quiz.wrong}</Text>
      <Text style={styles.resultText}>
        Success rate: {(quiz.right / quiz.cards.length) * 100} %
      </Text>
      <TouchableOpacity
        onPress={backToDeck}
        style={[globalStyle.button, styles.button]}
      >
        <Text style={[globalStyle.buttonText, styles.buttonText]}>
          Back to Deck
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(startQuiz(quiz.cards))}
        style={[globalStyle.button, styles.button]}
      >
        <Text style={[globalStyle.buttonText, styles.buttonText]}>
          Restart Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#95DBE5FF",
    borderColor: "#339E66FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    margin: 20,
    padding: 30,
    borderRadius: 15,
    height: 250,
  },
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#078282FF",
    marginVertical: 30,
  },
  cardInfo: {
    fontSize: 13,
    color: "gray",
    marginTop: 10,
  },
  progress: {
    fontSize: 15,
    color: "gray",
    marginVertical: 20,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#00539CFF",
    alignSelf: "center",
  },
  buttonText: {
    color: "#EEA47FFF",
  },
  rightButton: {
    backgroundColor: "#abebc6",
    borderColor: "#58d68d",
    borderWidth: 1,
  },
  wrongButton: {
    backgroundColor: "#f5b7b1",
    borderColor: "#ec7063",
    borderWidth: 1,
  },
  resultHeader: {
    fontSize: 27,
    fontWeight: "bold",
    marginVertical: 5,
    color: "black",
  },
  resultText: {
    fontSize: 18,
    marginVertical: 10,
    color: "black",
  },
});

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(mapStateToProps)(Quiz);
