import React from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { addDeck } from "../utils/api";
import { createDeck } from "../actions/decks";
import globalStyle from "../style";
import CustomButton from "./Button";

const AddDeck = ({ navigation, dispatch }) => {
  const [name, onChangeName] = React.useState("");

  const handleSubmit = () => {
    const newDeck = {
      title: name,
      cards: [],
    };
    addDeck(newDeck);
    dispatch(createDeck(newDeck));
    navigation.pop();
  };

  return (
    <View>
      <TextInput
        style={globalStyle.input}
        autoFocus={true}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <CustomButton
        onPress={() => handleSubmit()}
        disabled={name === ""}
        text="Confirm"
      />
    </View>
  );
};

export default connect()(AddDeck);
