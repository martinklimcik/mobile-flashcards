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

const Quiz = ({ quiz, navigation, dispatch }) => {
  if (quiz == null) {
    navigation.pop();
    return null;
  }

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
          <View>
            <Text>{card.question}</Text>
            <Text>Tap to view answer</Text>
          </View>
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback>
          <View>
            <Text>{card.answer}</Text>
            <Button title="Correct" onPress={() => handleAnswer(true)} />
            <Button title="Incorrect" onPress={() => handleAnswer(false)} />
          </View>
        </TouchableNativeFeedback>
      )}
      <Text>
        Question {index} of {total}
      </Text>
      <Button title="Stop Quiz" onPress={backToDeck} />
    </View>
  ) : (
    <View>
      <Text>Correct Answers: {quiz.right}</Text>
      <Text>Incorrect Answers: {quiz.wrong}</Text>
      <Text>Success rate: {(quiz.right / quiz.cards.length) * 100} %</Text>
      <Button title="Back to Deck" onPress={backToDeck} />
      <Button
        title="Restart Quiz"
        onPress={() => dispatch(startQuiz(quiz.cards))}
      />
    </View>
  );
};

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(mapStateToProps)(Quiz);
