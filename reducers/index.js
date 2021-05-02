import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions";

function data(state = {}, action) {
  console.log("<<<------------------------------------------reducer------"); // TODO DEL
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
      newState = state;
      break; // TODO
    default:
      newState = state;
      break;
  }
  console.log(newState);
  console.log("------------------------------------------reducer------>>>");
  return newState;
}

export default data;
