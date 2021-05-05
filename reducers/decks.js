import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/decks";

/*
decks: {
  'deck1': {
    title: 'deck1',
    cards: [
      {
        question: 'What is the answer to life, the universe and everything?',
        answer: '42'
      },
      {...},
      ...
    ]
  },
  'deck2': {
    title: 'deck2',
    cards: [...]
  },
  ...
}
*/
function decks(state = {}, action) {
  console.log("<<<------------------------------------reducer_decks------"); // TODO DEL
  console.log(state);
  console.log(action);
  let newState = null;
  switch (action.type) {
    case RECEIVE_DECKS:
      newState = {
        ...state,
        ...action.decks,
      };
      break;
    case ADD_DECK:
      newState = {
        ...state,
        [action.deck.title]: action.deck,
      };
      break;
    case ADD_CARD:
      newState = {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: state[action.deckId].cards.concat([action.card]),
        },
      };
      break; // TODO
    default:
      newState = { ...state };
      break;
  }
  console.log(newState);
  console.log("-----------------------------------------reducer------>>>");
  return newState;
}

export default decks;
