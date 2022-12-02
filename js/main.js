///constants/variables
const warArray = [];
const playerDeck = [];
const cpuDeck = [];
let playerCard = [];
let cpuCard = [];
let cards = [];

const battleBtn = document.querySelector("#battle");
const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

/*----- event listeners -----*/
battleBtn.addEventListener("click", () => {
  cardFaceoff();
});
startBtn.addEventListener("click", () => {
  createDeck();
  shuffle(cards);
  handout(cards);
});

/*----- functions -----*/
function battle() {
  console.log("works");
}

function startGame() {
  console.log("START");
}

//Card object
function card(value, name, suit) {
  this.value = value;
  this.name - name;
  this.suit = suit;
}

//function to create a deck of 52 cards
function createDeck() {
  this.names = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
  ];
  this.suits = ["Diamonds", "Spades", "Clubs", "Hearts"];
  cards = [];

  for (let s = 0; s < this.suits.length; s++) {
    for (let n = 0; n < this.names.length; n++) {
      cards.push(new card(n + 1, this.names[n], this.suits[s]));
    }
  }
  console.log("here are the cards: ", cards);
  return cards;
}

//function to shuffle the deck of cards
function shuffle(cards) {
  //starting at the length of the array minus 1, so we dont repeat the first card, for as long as i is greater than 0, subtract a card
  for (let i = cards.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];

    cards[i] = cards[r];
    cards[r] = temp;
  }
  console.log("here are the shuffled cards: ", cards);
  return cards;
}

//function to deal cards to both players
function handout(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (i % 2 === 0) {
      playerDeck.push(cards[i]);
    } else {
      cpuDeck.push(cards[i]);
    }
  }
  console.log("Player's deck: ", playerDeck);
  console.log("Opponent's deck: ", cpuDeck);
}

//function to pop cards from player/cpu deck into player/cpu hand

//function to take the first card out of the players hand of cards array and render them as a faceoff
function cardFaceoff() {
  playerCard = playerDeck.pop();
  console.log(playerCard);
  cpuCard = cpuDeck.pop();
  console.log(cpuCard);
  compareValues(playerCard, cpuCard);
}
//so far, ive set draw1 to the value of the last card in the playerdeck array.then i push draw1 into the playercard array, as the first card they draw to faceoff

//function to compare each players card
function compareValues(playerCard, cpuCard) {
  if (playerCard.value > cpuCard.value) {
    playerDeck.unshift(playerCard, cpuCard);
    console.log("player1 wins!");
  } else if (playerCard.value < cpuCard.value) {
    cpuDeck.unshift(cpuCard, playerCard);
    console.log('cpu wins!')
  } else {
    console.log('tie!')
  }
}


function war(){
  
}
//function to handle a tie(war)

//function to take 3 cards out of each players deck array and place into a new warArray.
// if not able to draw 3, as many as possible
//first check if both players have more than 4 cards in their deck array

//function to compare the final card that gets flipped from the war

//function to return all cards placed into any new array back into the origonal players deck array

//function to set war array bvack to empty

// function to check if either player is out of cards
//if cpu is out, player 1 wins
//if player 1 is out, cpu wins

//window onload

//create a "start game" button, then "new game" is the reset
//set boolean to false so that the start button cant be clicked while in a game
//on the new game button if the card count is equal to zero then
