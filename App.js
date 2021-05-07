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
- disable start quiz button if there are no cards
- disable confirm buttons on add card/deck if input is not valid
***notifications
***Styles
- styling of all views and elements
***Optional
- Delete/Modify deck
- View/manage cards in deck - view, modify, delete
- Randomize question order in quiz
- Save stats from previous runs
- Quiz progress visualise - progress bar
***Remove console.logs
***Clean imports
***Readme
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
