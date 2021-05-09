import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from "../actions/decks";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck,
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: state[action.deckId].cards.concat([action.card]),
        },
      };
    case DELETE_DECK:
      let newState = { ...state };
      newState[action.deckId] = undefined;
      delete newState[action.deckId];
      return newState;
    default:
      return state;
  }
}

export default decks;
