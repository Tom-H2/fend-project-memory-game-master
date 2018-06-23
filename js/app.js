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
const deck = document.querySelector('.deck'); //This function shuffles the deck every time the page is opened or reset

function newDeck() { //function that shuffles the deck
    const shuffleDeck = Array.from(document.querySelectorAll('.card'));
    const newShuffle = shuffle(shuffleDeck);
    for (card of newShuffle) {
      deck.appendChild(card);
    }
}
newDeck();

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

let openCards = []; //openCards.length will return the length of the array

deck.addEventListener('click', function(event) { //adds addEventListener to .deck
  const turn = event.target;
  incrementMoves();
  keepScore();
  if (turn.classList.contains('card') && openCards.length < 2 && !turn.classList.contains('open', 'show', 'match')) {
    openCards.push(turn);
    turn.classList.add('open', 'show');
  }

if(openCards.length === 2) {
  let firstCard = openCards[0];
  let secondCard = openCards[1];

  if (firstCard.firstElementChild.className ===
    secondCard.firstElementChild.className) {
      openCards.forEach(function(card) {
      card.classList.add ('match'); //adds 'match' to clss 'card' that allows the cards to stay open
    });

    openCards = [];
}
  else  {
    setTimeout(function(turn) {
      openCards.forEach(function(turn) {
      turn.classList.remove('open', 'show');
    });
      openCards = [];
      }, 1000);
   }
 }
});


 function timer() {

 }

let mouseClicks = 0;

function incrementMoves() {
  mouseClicks++;
  const numMoves = document.querySelector('.moves');
  numMoves.innerHTML = mouseClicks;
};

function keepScore() {
  const stars = document.querySelectorAll('.stars li');
  if (mouseClicks > 24 && mouseClicks < 39) {
    console.log ("remove one star");
  }
  else if (mouseClicks > 40) {
    console.log ("remove two stars");
  }
}

 function starCounter() {

 };

function message() {

}

function reset() {

}
