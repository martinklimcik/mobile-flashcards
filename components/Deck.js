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

class Deck extends Component {
  render() {
    const { navigation, deck } = this.props;

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
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate("Question")}
        />
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

function mapStateToProps(decks, { route }) {
  return { deck: decks[route.params.deckId] };
}

export default connect(mapStateToProps)(Deck);
