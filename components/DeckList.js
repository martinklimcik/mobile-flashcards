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

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>DECK LIST</Text>
        <Button
          title="Create New Deck"
          onPress={() => this.props.navigation.navigate("Add Deck")}
        />
      </View>
    );
  }
}

export default connect()(DeckList);
