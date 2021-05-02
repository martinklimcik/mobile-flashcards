import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "MobileFlashcards:Decks";

/* let testdataquiz = {
  deck: null,
  currentQuestion: null,
  answers: [],
}; */

function parse(data) {
  return JSON.parse(data);
}

export function getAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(parse);
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

export function resetStorage() {
  AsyncStorage.removeItem(STORAGE_KEY);
}
