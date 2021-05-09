import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
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
import { setLocalNotification } from "./utils/helpers";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setLocalNotification();
  });

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
