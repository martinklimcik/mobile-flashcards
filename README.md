# Mobile Flashcard

This project was created for Udacity's React & Redux course.

Project implements a mobile application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Project setup
Install dependencies using 

`npm install` or `yarn install`

Then start the app with

`yarn run android`

The application has been tested on emulator for Android 11.0

## Views
Application contains 5 views:
### All decks
Default screen on which user sees all the decks - name and number of cards contained, and can create new deck. Tapping on a deck navigates to deck view
### Create Deck
User can create new deck by typing its name and submitting
### Deck view
Contains deck name, number of card and buttons to add new card to the deck, to delete the deck and to start the quiz (this button is disabled if there are no cards in deck)
### Add card
User can add card to the deck by typing question and answer, and submitting
### Quiz view
Contains a card with question, underneath the card is shown progress - currect question and total number of questions and button to Stop the quiz. 

Tapping on the card shows the answer and buttons to tell the application whether user answered the question correctly or not.
When all questions has been answered, results are shown and buttons to either go back to Deck view or Restart the quiz.