export const START_QUIZ = "START_QUIZ";
export const STOP_QUIZ = "STOP_QUIZ";
export const NEXT_QUESTION = "ANSWER_RIGHT";

export function startQuiz(cards) {
  return {
    type: START_QUIZ,
    cards,
  };
}

export function nextQuestion(answer) {
  return {
    type: NEXT_QUESTION,
    answer,
  };
}
