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
import { createCard } from "../actions/decks";
import { addCard } from "../utils/api";
import globalStyle from "../style";

const AddCard = ({ navigation, route, dispatch }) => {
  const [question, onChangeQuestion] = React.useState(null);
  const [answer, onChangeAnswer] = React.useState(null);

  const handleSubmit = () => {
    const card = { question, answer };
    dispatch(createCard(route.params.deckId, card));
    addCard(route.params.deckId, card);
    navigation.pop();
  };

  return (
    <View>
      <TextInput
        style={globalStyle.input}
        autoFocus={true}
        onChangeText={onChangeQuestion}
        value={question}
        placeholder="Question"
      />
      <TextInput
        style={globalStyle.input}
        onChangeText={onChangeAnswer}
        value={answer}
        placeholder="Answer"
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <View style={globalStyle.button}>
          <Text style={globalStyle.buttonText}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(AddCard);
