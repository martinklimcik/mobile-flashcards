let testdatadecks = {
  Deck1: {
    title: "Deck Name 1",
    cards: [
      { question: "Question 1", answer: "Answer 1" },
      { question: "Question 2", answer: "Answer 2" },
      { question: "Question 3", answer: "Answer 3" },
    ],
  },
  Deck2: {
    title: "Deck Name 2",
    cards: [{ question: "Deck2Question 1", answer: "Deck2Answer 1" }],
  },
  Deck3: {
    title: "Deck Name 3",
    cards: [
      { question: "3Question 1", answer: "3Answer 1" },
      { question: "3Question 2", answer: "3Answer 2" },
      { question: "3Question 3", answer: "3Answer 3" },
      { question: "3Question 4", answer: "3Answer 3" },
      { question: "3Question 5", answer: "3Answer 3" },
      { question: "3Question 6", answer: "3Answer 3" },
    ],
  },
  Deck4: {
    title: "Deck Name 4",
    cards: [],
  },
};

/* let testdataquiz = {
  deck: null,
  currentQuestion: null,
  answers: [],
}; */

export function getAllDecks() {
  return testdatadecks;
}

export function getDeck(deckId) {
  return testdatadecks[deckId];
}
