/*

decks = {
  Deck1: {
    title: 'Deck Name 1',
    cards: [
      { question: 'Question 1', answer: 'Answer 1' },
      { question: 'Question 2', answer: 'Answer 2' },
      { question: 'Question 3', answer: 'Answer 3' },
    ]
  },
  Deck2: {...}
}
quiz = {
  deck: deckId,
  current: questionIndex,
  answers: [true, false, true, true, ...],
}


Actions:
==Decks:
- Get All Decks () -> decks {}
- Get Data of one Deck (deckId) -> deck {}

- Add Deck (deckData)
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

function data(state = {}, action) {
  switch (action.type) {
    case "bla":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default data;
