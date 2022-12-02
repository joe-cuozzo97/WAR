///constants/variables
const warArray = [];
const playerDeck = [];
const cpuDeck = [];
const playerCard = {};
const cpuCard = {};
let cards = []

const battleBtn = document.querySelector("#battle");
const newGameBtn = document.querySelector("#newGame");
const surrenderBtn = document.querySelector("#surrender");


/*----- event listeners -----*/
battleBtn.addEventListener("click", battle);
newGameBtn.addEventListener("click", () => {
  createDeck();
  shuffle(cards);
  handout(cards);
});
surrenderBtn.addEventListener("click", surrender);


/*----- functions -----*/
function battle() {
  console.log("works");
}

function newGame() {
  console.log("New Game");
}

function surrender() {
  console.log("I give up!");
}

//Card object
function card(value, name, suit) {
  this.value = value;
  this.name - name;
  this.suit = suit;
}

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

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];

    cards[i] = cards[r];
    cards[r] = temp;
  }
  console.log("here are the shuffled cards: ", cards);
  return cards;
}

function handout(cards) {
for(let i = 0; i < cards.length; i++){
    if (i % 2 === 0){
        playerDeck.push(cards[i])
    } else{
        cpuDeck.push(cards[i])
    }
}  
console.log("Player's hand: ", playerDeck)
console.log("Opponent's hand: ", cpuDeck)
}

//split the cards array in half randomly-two dif arrays
//


//function to take the first card out of the players hand of cards array and render them as a faceoff

//function to compare each players card
// function if the players card is bigger, player wins
// function if the cpu's card is bigger, cpu wins
//function to update the total cards each player has
//function to calculate each players points

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
