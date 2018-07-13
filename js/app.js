
let deck = document.querySelector('.deck'); //This function shuffles the deck every time the page is opened or reset
let turnCards = document.querySelectorAll('.card');//sets variable for individual card
let stars = document.querySelectorAll('.fa-star');
let clock = document.querySelector('.clock');
let numMoves = document.querySelector('.moves');
let openCards = []; //openCards.length will return the length of the array
let time = 0;
let clockId;
let matchedCards = []; //creates open array into which matched cards will be pushed
let firstCard;
let secondCard;
let finalStars;
let finalClicks;
let finalTime;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


function newDeck() { //function that shuffles the deck
    const shuffleDeck = Array.from(document.querySelectorAll('.card'));
    const newShuffle = shuffle(shuffleDeck);
    for (card of newShuffle) {
      deck.appendChild(card);
    }
}
newDeck();

function shuffle(array) { //This code was provided in initial set up code
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

deck.addEventListener('click', function(event) { //adds addEventListener to .deck
  let turn = event.target;
  incrementMoves(); //changes the move score
  keepScore();

  if (turn.classList.contains('card') && openCards.length < 2 && !turn.classList.contains('open', 'show', 'match')) {
    openCards.push(turn);
    turn.classList.add('open', 'show');
  }

if(openCards.length === 2) {
  firstCard = openCards[0];
  secondCard = openCards[1];

  if (firstCard.firstElementChild.className ===
    secondCard.firstElementChild.className) {
      openCards.forEach(function(card) {
      card.classList.add('match'); //adds 'match' to class 'card' that allows the cards to stay open
    });
    gameOver();
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

let mouseClicks = 0;

function incrementMoves() { //listens to mouse clicks and increments up the Moves text. This function is called on line 66
  mouseClicks++;
  numMoves.innerHTML = mouseClicks;
  if (mouseClicks === 1) {
    startTime();
  }
};

function keepScore() { //tracks the number of mouse clicks from incrementMoves function the console.log tells what I want to happen to stars
  let thirdStar = document.getElementById('thirdStar'),
      secondStar = document.getElementById('secondStar'),
      firstStar = document.getElementById('firstStar');

  if (mouseClicks === 20) {
    thirdStar.classList.add('fa-star-o');
  }
  else if (mouseClicks === 34) {
    secondStar.classList.add('fa-star-o');
  }
  else if (mouseClicks === 40) {
    thirdStar.classList.add('fa-star-o');
  }
}

function startTime() {
  time = 0;
  clockId = setInterval(() => {
    time++;
    clock.innerHTML = time;
  }, 1000);

}

let reset = document.querySelector('.restart'); //Event listener for restart button
  reset.addEventListener('click', function(event) {
    gameReset();
  })

function callModal () {
  const modal = document.querySelector('.modal__body');
  modal.classList.toggle('hide');
}
  //callModal(); //keeps modal open for testing and styling

function gameOver () {
  if (firstCard.classList.contains('match') && secondCard.classList.contains('match')) {
      matchedCards.push(firstCard);
      matchedCards.push(secondCard);
      if (matchedCards.length === 16) {
        callModal();
        stopTime();
    }
  }
}

document.querySelector('.modal__close').addEventListener('click', () => {
  callModal();
});

document.querySelector('.modal__button').addEventListener('click', () => { //replay button on modal
  mouseClicks = 0;
  resetStars();
  resetMoves();
  resetTime();
  newDeck();
  cardReset();
});

function resetStars () {
  thirdStar.classList.remove('fa-star-o');
  secondStar.classList.remove('fa-star-o');
  firstStar.classList.remove('fa-star-o');
}

function resetMoves () {
  numMoves.innerHTML = 0;
}

function resetTime () {
  clock.innerHTML = 0;
}

function stopTime () {
  clearInterval(clockId);
}

function cardReset () {
  const cards = document.querySelectorAll('.deck li');
  for (let card of cards) {
    card.className = 'card';
  }
}

function gameReset() {
  mouseClicks = 0;
  resetStars();
  resetMoves();
  resetTime();
  stopTime();
  newDeck();
  cardReset();
}
