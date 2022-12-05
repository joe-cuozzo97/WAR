///constants/variables
let warArrayPl1 = [];
let warArrayCpu = [];
let playerDeck = [];
let cpuDeck = [];
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
  // console.log("here are the cards: ", cards);
  return cards;
}

//function to shuffle the deck of cards
function shuffle(cards) {
  console.log(cards);
  //starting at the length of the array minus 1, so we dont repeat the first card, for as long as i is greater than 0, subtract a card
  for (let i = cards.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];

    cards[i] = cards[r];
    cards[r] = temp;
  }
  // console.log("here are the shuffled cards: ", cards);
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

//function to take the first card out of the players hand of cards array and render them as a faceoff
function cardFaceoff() {
  // console.log('player cards should be this', playerDeck.pop())
  playerCard = playerDeck.shift();
  console.log('players card is this', playerCard);
  cpuCard = cpuDeck.shift();
  console.log('cpu card is this', cpuCard);
  compareValues(playerCard, cpuCard);
}
//so far, ive set draw1 to the value of the last card in the playerdeck array.then i push draw1 into the playercard array, as the first card they draw to faceoff

//function to compare each players card
function compareValues(playerCard, cpuCard) {
  if (playerCard.value > cpuCard.value) {
    playerDeck.push(playerCard, cpuCard);
    console.log("player1 wins!");
  } else if (playerCard.value < cpuCard.value) {
    cpuDeck.push(cpuCard, playerCard);
    console.log("cpu wins!");
  } else {
    war();
  }
}

//function to check if both playters have enough cards to have a full war, and if not, use the amount of cards that the person with less cards has
function war() {
  let length = 0;

  if (playerDeck.length < 5 || cpuDeck.length < 5) {
    if (playerDeck.length > cpuDeck.length) {
      length = cpuDeck.length - 1;
    } else if (playerDeck.length < cpuDeck.length) {
      length = playerDeck.length - 1;
    }
  } else {
    length = 3;
  }
  //keep adding cards from the playerdeck into the war array as long as i is less than the length(3)
  for (i = 0; i < length; i++) {
    warArrayPl1.push(playerDeck[0]);
    playerDeck.shift();
    warArrayCpu.push(cpuDeck[0]);
    cpuDeck.shift();
    //another loop ?
//need to push the winner of the war function's cards back into their deck
    compareValues(warArrayPl1[0], warArrayCpu[0]);
    console.log("wartime");
  }

  
}
//see if i can manually check second index of both, depending on the winner, take all cards out of both war arrays and add to the winners deck


//function to return all cards placed into any new array back into the origonal players deck array
//use append or prepend???

//function to set war array bvack to empty


// function to check if either player is out of cards
//if either player is out of cards, the draw button becomes hidden so that new game must be clicked
function checkWin() {
  if (playerDeck.length == 0) {
    console.log("CPU Wins!");
    // $("#battle").hide();
  } else if (cpuDeck.length == 0) {
    console.log("player1 Wins!");
    // $("#battle").hide();
  }
}


//window onload

//create a "start game" button, then "new game" is the reset
//set boolean to false so that the start button cant be clicked while in a game
//on the new game button if the card count is equal to zero then
