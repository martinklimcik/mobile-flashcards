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

const AddDeck = ({ navigation }) => {
  const [name, onChangeName] = React.useState(null);

  const handleSubmit = (deckName) => {
    // TODO create new
    navigation.pop();
  };

  return (
    <View>
      <TextInput onChangeText={onChangeName} value={name} placeholder="Name" />
      <Button title="Submit" onPress={() => handleSubmit(name)} />
    </View>
  );
};

export default connect()(AddDeck);
