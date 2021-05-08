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
