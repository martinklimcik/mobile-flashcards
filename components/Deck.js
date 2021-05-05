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
import { startQuiz } from "../actions/quiz";

class Deck extends Component {
  startQuiz = () => {
    this.props.dispatch(startQuiz(this.props.deck.cards));
    this.props.navigation.navigate("Quiz");
  };

  render() {
    const { navigation, deck } = this.props;

    if (deck == null) {
      navigation.pop();
    }

    return (
      <View style={styles.deck}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>{deck.cards.length} cards</Text>
        <Button
          title="Add Card"
          onPress={() =>
            navigation.navigate("Add Card", { deckId: deck.title })
          }
        />
        <Button title="Start Quiz" onPress={this.startQuiz} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  count: {
    fontSize: 15,
    fontStyle: "italic",
  },
});

function mapStateToProps({ decks }, { route }) {
  return { deck: decks[route.params.deckId] };
}

export default connect(mapStateToProps)(Deck);
