import React from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { createCard } from "../actions/decks";
import { addCard } from "../utils/api";
import globalStyle from "../style";
import CustomButton from "./Button";

const AddCard = ({ navigation, route, dispatch }) => {
  const [question, onChangeQuestion] = React.useState("");
  const [answer, onChangeAnswer] = React.useState("");

  const handleSubmit = () => {
    const card = { question, answer };
    dispatch(createCard(route.params.deckId, card));
    addCard(route.params.deckId, card);
    navigation.pop();
  };

  return (
    <View>
      <TextInput
        multiline
        style={globalStyle.input}
        autoFocus={true}
        onChangeText={onChangeQuestion}
        value={question}
        placeholder="Question"
      />
      <TextInput
        multiline
        style={globalStyle.input}
        onChangeText={onChangeAnswer}
        value={answer}
        placeholder="Answer"
      />
      <CustomButton
        text="Confirm"
        onPress={() => handleSubmit()}
        disabled={question === "" || answer === ""}
      />
    </View>
  );
};

export default connect()(AddCard);
