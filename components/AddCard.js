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
import { createCard } from "../actions";
import { addCard } from "../utils/api";

const AddCard = ({ navigation, route, dispatch }) => {
  const [question, onChangeQuestion] = React.useState(null);
  const [answer, onChangeAnswer] = React.useState(null);

  const handleSubmit = (question, answer) => {
    const card = { question, answer };
    dispatch(createCard(route.params.deckId, card));
    addCard(route.params.deckId, card);
    navigation.pop();
  };

  return (
    <View>
      <TextInput
        onChangeText={onChangeQuestion}
        value={question}
        placeholder="Question"
      />
      <TextInput
        onChangeText={onChangeAnswer}
        value={answer}
        placeholder="Answer"
      />
      <Button title="Submit" onPress={() => handleSubmit(question, answer)} />
    </View>
  );
};

export default connect()(AddCard);
