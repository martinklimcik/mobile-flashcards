import { NEXT_QUESTION, START_QUIZ, STOP_QUIZ } from "../actions/quiz";

function quiz(state = {}, action) {
  switch (action.type) {
    case START_QUIZ:
      return {
        cards: action.cards,
        current: 0,
        right: 0,
        wrong: 0,
      };
    case NEXT_QUESTION:
      let newState = {
        ...state,
        current: state.current + 1,
      };
      action.answer === true ? (newState.right += 1) : (newState.wrong += 1);
      return newState;
    default:
      return state;
  }
}

export default quiz;
