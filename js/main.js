let warArrayPl1 = [];
let warArrayCpu = [];
let winnerWarArr = [];
let playerDeck = [];
let cpuDeck = [];
let playerCard = [];
let cpuCard = [];
let cards = [];

const battleBtn = document.querySelector("#battle");
const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

battleBtn.addEventListener("click", () => {
  cardFaceoff();
});
startBtn.addEventListener("click", () => {
  createDeck();
  shuffle(cards);
  handout(cards);
});

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
  playerCard = playerDeck.shift();
  console.log("players card is this", playerCard);
  cpuCard = cpuDeck.shift();
  console.log("cpu card is this", cpuCard);
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
  warArrayPl1.push(playerCard);
  warArrayCpu.push(cpuCard);

  if (playerDeck.length < 4 || cpuDeck.length < 4) {
    if (playerDeck.length > cpuDeck.length) {
      length = cpuDeck.length - 1;
    } else if (playerDeck.length < cpuDeck.length) {
      length = playerDeck.length - 1;
    }
  } else {
    length = 4;
  }
  //keep adding cards from the playerdeck into the war array as long as i is less than the length(3)
  for (i = 0; i < length; i++) {
    warArrayPl1.push(playerDeck[0]);
    playerDeck.shift();
    warArrayCpu.push(cpuDeck[0]);
    cpuDeck.shift();
  }
  winnerWarArr = warArrayPl1.concat(warArrayCpu);
  console.log("wartime");
  console.log(warArrayPl1);
  console.log(warArrayCpu);
  console.log(winnerWarArr)
  

  if (warArrayPl1[4].value > warArrayCpu[4].value) {
    console.log(winnerWarArr)
    playerDeck = playerDeck.concat(winnerWarArr);   
    warArrayPl1 = []
    console.log("player wins this war!");
  } else if (warArrayPl1[4].value < warArrayCpu[4].value) {
    console.log(winnerWarArr)
    cpuDeck = cpuDeck.concat(winnerWarArr);
    warArrayCpu = []
    console.log("cpu wins this war!");
  } else {
    console.log("another tie!");
   war()
  }
}

//see if i can manually check third index of both, depending on the winner, take all cards out of both war arrays and add to the winners deck

//function to return all cards placed into any new array back into the origonal players deck array
//use append or prepend???

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
