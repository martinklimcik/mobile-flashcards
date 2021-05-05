import { NEXT_QUESTION, START_QUIZ, STOP_QUIZ } from "../actions/quiz";

/*
quiz: {
    questions: [{...},{...},...],
    current: 0,
    correct: 0,
    incorrect: 0
} 
*/
function quiz(state = {}, action) {
  console.log("<<<------------------------------------reducer_quiz------"); // TODO DEL
  console.log(state);
  console.log(action);
  let newState = null;
  switch (action.type) {
    case START_QUIZ:
      newState = {
        cards: action.cards,
        current: 0,
        right: 0,
        wrong: 0,
      };
      break;
    case NEXT_QUESTION:
      newState = {
        ...state,
        current: state.current + 1,
      };
      action.answer === true ? (newState.right += 1) : (newState.wrong += 1);
      break;
    default:
      newState = { ...state };
      break;
  }
  console.log(newState);
  console.log("------------------------------------------reducer----->>>");
  return newState;
}

export default quiz;
