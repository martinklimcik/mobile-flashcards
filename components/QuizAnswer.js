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

class QuizAnswer extends Component {
  render() {
    return (
      <View>
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate("DeckList")}
        />
      </View>
    );
  }
}

export default connect()(QuizAnswer);
