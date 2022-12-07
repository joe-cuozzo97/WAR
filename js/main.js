let warArrayPl1 = [];
let warArrayCpu = [];
let winnerWarArr = [];
let playerDeck = [];
let cpuDeck = [];
let playerCard = [];
let cpuCard = [];
let cards = [];

let playerWinsGame = document.querySelector('.playerWinsGame')
let cpuWinsGame = document.querySelector('.cpuWinsGame')
let playerCardsLeft = document.querySelector('.playerCardsLeft')
let cpuCardsLeft = document.querySelector('.cpuCardsLeft')
let playerWinLoss = document.querySelector('.playerWinLoss')
let cpuWinLoss = document.querySelector('.cpuWinLoss')
const battleBtn = document.querySelector("#battle");
const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

battleBtn.addEventListener("click", () => {
  cardFaceoff();
  styleThePile(playerCard, cpuCard);
  checkWin();
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
}

function startGame() {
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
  
}

function cardFaceoff() {
  playerCard = playerDeck.shift();
  // console.log("players card is this", playerCard);
  cpuCard = cpuDeck.shift();
  // console.log("cpu card is this", cpuCard);
  compareValues(playerCard, cpuCard);
}
//so far, ive set draw1 to the value of the last card in the playerdeck array.then i push draw1 into the playercard array, as the first card they draw to faceoff

//function to compare each players card

function compareValues(playerCard, cpuCard) {
  if (playerCard.value > cpuCard.value) {
    playerDeck.push(playerCard, cpuCard);
    console.log("player1 wins!");
    const playerMessage = document.createElement('p')
    const playerMessageText = document.createTextNode('Player1 Wins!')
    playerMessage.appendChild(playerMessageText)
    playerWinLoss.append(playerMessage)
    setTimeout(()=> {
      playerWinLoss.removeChild(playerMessage)
  }, 1500)
  let countMessage = document.createTextNode(`Cards Left: ${playerDeck.length}`)
  playerCardsLeft.appendChild(countMessage)
  setTimeout(()=> {
    playerCardsLeft.removeChild(countMessage)
}, 1000)
let cpuCountMessage = document.createTextNode(`Cards Left: ${cpuDeck.length}`)
cpuCardsLeft.appendChild(cpuCountMessage)
  setTimeout(()=> {
  cpuCardsLeft.removeChild(cpuCountMessage)
}, 1000)
} else if (playerCard.value < cpuCard.value) {
    cpuDeck.push(cpuCard, playerCard);
    console.log("cpu wins!");
    const cpuMessage = document.createElement('p')
    const cpuMessageText = document.createTextNode('CPU Wins!')
    cpuMessage.appendChild(cpuMessageText)
    cpuWinLoss.append(cpuMessage)
    setTimeout(()=> {
      cpuWinLoss.removeChild(cpuMessage)
  }, 1500)
  let cpuCountMessage = document.createTextNode(`Cards Left: ${cpuDeck.length}`)
cpuCardsLeft.appendChild(cpuCountMessage)
  setTimeout(()=> {
  cpuCardsLeft.removeChild(cpuCountMessage)
}, 1000)
let countMessage = document.createTextNode(`Cards Left: ${playerDeck.length}`)
playerCardsLeft.appendChild(countMessage)
setTimeout(()=> {
  playerCardsLeft.removeChild(countMessage)
}, 1000)
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

  if (
    warArrayPl1[warArrayPl1.length - 1].value >
    warArrayCpu[warArrayCpu.length - 1].value
  ) {
    playerDeck = playerDeck.concat(winnerWarArr);
    warArrayPl1 = [];
    warArrayCpu = [];
    winnerWarArr = [];
  } else if (
    warArrayPl1[warArrayPl1.length - 1].value <
    warArrayCpu[warArrayCpu.length - 1].value
  ) {
    cpuDeck = cpuDeck.concat(winnerWarArr);
    warArrayCpu = [];
    warArrayPl1 = [];
    winnerWarArr = [];
  } else {
    warArrayCpu = [];
    warArrayPl1 = [];
    winnerWarArr = [];
    //need to have the war arrays remain the same on double ties- not have the arrays all cleared out
    war();
  }
}

function checkWin() {
  if (playerDeck.length === 0) {
playerCardsLeft.innerHTML = 'CPU Wins the Game!'
    battleBtn.disabled = true;
    startBtn.disabled = true;
  } else if (cpuDeck.length === 0) {
cpuCardsLeft.innerHTML = 'Player1 Wins the Game'
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

}
