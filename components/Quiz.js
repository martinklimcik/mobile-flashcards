import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { nextQuestion, startQuiz } from "../actions/quiz";
import globalStyle from "../style";
import FlipCard from "react-native-flip-card";
import CustomButton from "./Button";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

const Quiz = ({ quiz, navigation, dispatch }) => {
  const [isButtonsShown, showButtons] = React.useState(false);
  const index = quiz.current + 1;
  const total = quiz.cards.length;
  const card = quiz.cards[quiz.current];
  const quizInProgress = index <= total;

  function handleAnswer(answer) {
    showButtons(false);
    dispatch(nextQuestion(answer));
  }

  function backToDeck() {
    navigation.pop();
  }

  useEffect(() => {
    if (!quizInProgress) {
      clearLocalNotification().then(setLocalNotification);
    }
  });

  return quizInProgress ? (
    // quiz in progress
    <View>
      <View style={styles.cardView}>
        <FlipCard
          friction={6}
          flipHorizontal={true}
          flipVertical={false}
          clickable={true}
          flip={false}
          onFlipStart={() => showButtons(true)}
        >
          <View style={styles.card}>
            <Text style={styles.cardText}>{card.question}</Text>
            <Text style={styles.cardInfo}>tap to view answer</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>{card.answer}</Text>
          </View>
        </FlipCard>
      </View>
      {isButtonsShown ? (
        <View>
          <CustomButton
            text="Correct"
            onPress={() => handleAnswer(true)}
            buttonStyle={styles.rightButton}
          />
          <CustomButton
            text="Incorrect"
            onPress={() => handleAnswer(false)}
            buttonStyle={styles.wrongButton}
          />
        </View>
      ) : null}
      <View>
        <Text style={styles.progress}>
          Question {index} of {total} ({total - index} remaning)
        </Text>
        <CustomButton
          text="Stop Quiz"
          onPress={backToDeck}
          buttonStyle={globalStyle.buttonBlue}
          textStyle={globalStyle.buttonTextBlue}
        />
      </View>
    </View>
  ) : (
    // quiz finished
    <View style={{ alignItems: "center" }}>
      <Text style={styles.resultHeader}>Results</Text>
      <Text style={styles.resultText}>Correct answers: {quiz.right}</Text>
      <Text style={styles.resultText}>Incorrect answers: {quiz.wrong}</Text>
      <Text style={styles.resultText}>
        Success rate: {((quiz.right / quiz.cards.length) * 100).toFixed(1)} %
      </Text>
      <CustomButton
        text="Back to Deck"
        onPress={backToDeck}
        buttonStyle={globalStyle.buttonBlue}
        textStyle={globalStyle.buttonTextBlue}
      />
      <CustomButton
        text="Restart Quiz"
        onPress={() => dispatch(startQuiz(quiz.cards))}
        buttonStyle={globalStyle.buttonBlue}
        textStyle={globalStyle.buttonTextBlue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 15,
    height: 300,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#95DBE5FF",
    borderColor: "#339E66FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    margin: 20,
    padding: 30,
    borderRadius: 15,
    height: 300,
  },
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
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
  rightButton: {
    ...globalStyle.buttonGreen,
    backgroundColor: "#abebc6",
    borderColor: "#58d68d",
    borderWidth: 1,
  },
  wrongButton: {
    ...globalStyle.buttonGreen,
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
