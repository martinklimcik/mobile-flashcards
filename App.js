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

/*
TODO
***Data Management
- redux/localstorage functionality for all except quizzing - get, set decks data
***Basic views
- Quiz
  - subnavigation to switch between questions
  - Question
    - question
    - View answer
    - Stop Quiz
    - Progress
  - Answer
    - answer
    - Correct, Incorrect buttons
    - Stop Quiz
  - Finished Quiz
    - stats: correctly/incorrectly answered questions
    - view details
    - done
  - Detailed stats:
    - every question and its answer, show if was answered correctly or not
***Styles
- styling of all views and elements
***Optional
- Delete/Modify deck
- Delete/Modify question
- Randomize question order in quiz
- Save stats from previous runs
***Remove console.logs
***Clean imports
*/

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
