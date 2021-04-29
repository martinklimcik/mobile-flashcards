import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import reducer from "./reducers";

import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import QuizQuestion from "./components/QuizQuestion";
import QuizAnswer from "./components/QuizAnswer";
import QuizFinished from "./components/QuizFinished";
import QuizFinishedDetail from "./components/QuizFinishedDetail";
import AddDeck from "./components/AddDeck";

// const nav = createStackNavigator({});

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="All Decks" component={DeckList} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Add Card" component={AddCard} />
          <Stack.Screen name="Add Deck" component={AddDeck} />
          <Stack.Screen name="Quiz Detail" component={QuizFinishedDetail} />
          <Stack.Screen name="Finished Quiz" component={QuizFinished} />
          <Stack.Screen name="Answer" component={QuizAnswer} />
          <Stack.Screen name="Question" component={QuizQuestion} />
        </Stack.Navigator>
      </NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
