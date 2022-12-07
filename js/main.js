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
  styleThePile(playerCard, cpuCard);
  checkWin();
  console.log("this is the players deck:", playerDeck);
  console.log("this is the cpu deck:", cpuDeck);
  if (checkWin()) {
    battleBtn.disabled = true;
    startBtn.disabled = true;
  }
});
startBtn.addEventListener("click", () => {
  createDeck();
  shuffle(cards);
  handout(cards);
  if (createDeck()) {
    startBtn.disabled = true;
  }
});

function battle() {
  console.log("works");
}

function startGame() {
  console.log("START");
}

function card(value, name, suit) {
  this.value = value;
  this.name - name;
  this.suit = suit;
}

function createDeck() {
  this.names = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
  ];
  this.suits = ["d", "s", "c", "h"];
  cards = [];

  for (let s = 0; s < this.suits.length; s++) {
    for (let n = 0; n < this.names.length; n++) {
      cards.push(new card(n + 1, this.names[n], this.suits[s]));
    }
  }
  return cards;
}

function shuffle(cards) {
  console.log(cards);
  //starting at the length of the array minus 1, so we dont repeat the first card, for as long as i is greater than 0, subtract a card
  for (let i = cards.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];

    cards[i] = cards[r];
    cards[r] = temp;
  }
  return cards;
}

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
    // let pOneCardCount = playerDeck.length;
    // $("p").html(pOneCardCount);
    // return "This is the player card count: " + playerDeck.length;
    console.log("player1 wins!");
  } else if (playerCard.value < cpuCard.value) {
    cpuDeck.push(cpuCard, playerCard);
    // let cpuCardCount = cpuDeck.length;
    // $(".result").html("CPU wins!");
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

  if (
    warArrayPl1[warArrayPl1.length - 1].value >
    warArrayCpu[warArrayCpu.length - 1].value
  ) {
    console.log(winnerWarArr);
    playerDeck = playerDeck.concat(winnerWarArr);
    warArrayPl1 = [];
    warArrayCpu = [];
    winnerWarArr = [];
    console.log("player wins this war!");
  } else if (
    warArrayPl1[warArrayPl1.length - 1].value <
    warArrayCpu[warArrayCpu.length - 1].value
  ) {
    console.log(winnerWarArr);
    cpuDeck = cpuDeck.concat(winnerWarArr);
    warArrayCpu = [];
    warArrayPl1 = [];
    winnerWarArr = [];
    console.log("cpu wins this war!");
  } else {
    console.log("another tie!");
    warArrayCpu = [];
    warArrayPl1 = [];
    winnerWarArr = [];
    //need to have the war arrays remain the same on double ties- not have the arrays all cleared out
    war();
  }
}

function checkWin() {
  if (playerDeck.length === 0) {
    console.log("CPU Wins The Game!");
    // render "player wins the game!"
    battleBtn.disabled = true;
    startBtn.disabled = true;
  } else if (cpuDeck.length === 0) {
    console.log("player1 Wins The Game!");
    //if render "cpu wins the game!"
    battleBtn.disabled = true;
    startBtn.disabled = true;
  }
}

function styleThePile(playerCard, cpuCard) {
  let drawPile = document.getElementById("p1DrawPile");
  drawPile.className = "card shadow xlarge";
  let cpuDrawPile = document.getElementById("cpuDrawPile");
  cpuDrawPile.className = "card shadow xlarge";

  if (playerCard.value < 10) {
    drawPile.classList.add(`${playerCard.suit}0${playerCard.value}`);
  } else {
    drawPile.classList.add(`${playerCard.suit}${playerCard.value}`);
  }

  if (cpuCard.value < 10) {
    cpuDrawPile.classList.add(`${cpuCard.suit}0${cpuCard.value}`);
  } else {
    cpuDrawPile.classList.add(`${cpuCard.suit}${cpuCard.value}`);
  }

  //   const cardMap = {
  //     Diamonds: {
  //       1: "d01",
  //       2: "d02",
  //       3: "d03",
  //       4: "d04",
  //       5: "d05",
  //       6: "d06",
  //       7: "d07",
  //       8: "d08",
  //       9: "d09",
  //       10: "d10",
  //       11: "d11",
  //       12: "d12",
  //       13: "d13",
  //     },
  //     Hearts: {
  //       1: "h01",
  //       2: "h02",
  //       3: "h03",
  //       4: "h04",
  //       5: "h05",
  //       6: "h06",
  //       7: "h07",
  //       8: "h08",
  //       9: "h09",
  //       10: "h10",
  //       11: "h11",
  //       12: "h12",
  //       13: "h13",
  //     },
  //     Spades: {
  //       1: "s01",
  //       2: "s02",
  //       3: "s03",
  //       4: "s04",
  //       5: "s05",
  //       6: "s06",
  //       7: "s07",
  //       8: "s08",
  //       9: "s09",
  //       10: "s10",
  //       11: "s11",
  //       12: "s12",
  //       13: "s13",
  //     },
  //     Clubs: {
  //       1: "c01",
  //       2: "c02",
  //       3: "c03",
  //       4: "c04",
  //       5: "c05",
  //       6: "c06",
  //       7: "c07",
  //       8: "c08",
  //       9: "c09",
  //       10: "c10",
  //       11: "c11",
  //       12: "c12",
  //       13: "c13",
  //     },
  //   };
  // }
}
