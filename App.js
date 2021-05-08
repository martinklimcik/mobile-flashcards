import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import reducer from "./reducers";

import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import AddDeck from "./components/AddDeck";

/*
TODO
- card animation
- notification
***Optional
- Delete/Modify deck
- View/manage cards in deck - view, modify, delete
- Randomize question order in quiz
- Save stats from previous runs
- Quiz progress visualise - progress bar
- Button styles refactor - button styles from globaStyle to CustomButton, export buttonStyle, pass to CustomButton only changes to default style
***Cleanup
- Remove console.logs + reducers refactor
- Function comments
- Clean imports
- Readme
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
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
