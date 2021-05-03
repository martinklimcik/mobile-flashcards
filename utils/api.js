import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "MobileFlashcards:Decks";

/* let testdataquiz = {
  deck: null,
  currentQuestion: null,
  answers: [],
}; */

/// https://react-native-async-storage.github.io/async-storage/docs/api

function parseData(data) {
  console.log("LOADED DECKS DATA");
  console.log(data);
  console.log("_______________________________");
  return JSON.parse(data);
}

export function getAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(parseData);
}

export function addDeck(deck) {
  AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deck.title]: deck,
    })
  ).catch((e) => {
    console.warn(e);
  });
}

export function addCard(deckId, card) {
  getAllDecks().then((decks) => {
    decks[deckId].cards.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  });
}

export function resetStorage() {
  AsyncStorage.removeItem(STORAGE_KEY);
}
