export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

/*
Actions:
==Decks:
- *Delete Deck (deckId)
- *Rename Deck (deckId, newName)
- Add Question (deckId, question, answer)
- *Delete Question (deck, questionIndex)
==Quiz
- Get Question Data (questionIndex) -> card {}
- start Quiz (deckId)
- stop Quiz ()
- saveQuestionAnswer (questionIndex, answer: bool)
*/

export function receiveDecks(decks = {}) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function createDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function createCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}
