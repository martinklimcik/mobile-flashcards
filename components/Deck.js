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
import { getDeck } from "../utils/api";

class Deck extends Component {
  render() {
    const { navigation, route } = this.props;
    const deck = getDeck(route.params.deckId);

    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.cards.length} cards</Text>
        <Button
          title="Add Card"
          onPress={() => navigation.navigate("Add Card")}
        />
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate("Question")}
        />
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

export default connect()(Deck);
