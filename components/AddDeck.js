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
import { createDeck } from "../actions";

const AddDeck = ({ navigation, dispatch }) => {
  const [name, onChangeName] = React.useState(null);

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
      <TextInput onChangeText={onChangeName} value={name} placeholder="Name" />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </View>
  );
};

export default connect()(AddDeck);
