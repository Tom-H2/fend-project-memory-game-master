/*
 * Create a list that holds all of your cards
 */
const allCards = [      //array that holds allCards
  "fa fa-diamond", "fa fa-diamond",
  "fa fa-paper-plane-o", "fa fa-paper-plane-o",
  "fa fa-anchor", "fa fa-anchor",
  "fa fa-bolt", "fa fa-bolt",
  "fa fa-cube", "fa fa-cube",
  "fa fa-bomb", "fa fa-bomb",
  "fa fa-leaf", "fa fa-leaf",
  "fa fa-bicycle", "fa fa-bicycle",
];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 const turnCards = document.querySelectorAll('.card');//sets variable for individual card
 const match = 'match';
    //turnCards.inserAdjacentHTML('afterend', match);

 turnCards.forEach(function(turn) {  //creates function for turning and showing the gameCards
   turn.addEventListener('click', function(e) {
     turn.classList.add('open', 'show');
     turn.push(allCards);//As I turn the card I must push them into an array until the length of the array = 2.
     //If at that point the name of the card are the same
     //Then turn.classList.add ('match'); //adds 'match' to clss 'card' that allows the cards to stay open
     //Else turn the cards back over
     //Else when all the turned over cards === 16 the game is over
   });


 });
