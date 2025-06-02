/*
 **  Initialization
 */

// JQuery
const pikapika = document.querySelector("#pikapika");
const prize = document.querySelector("#prize");

// Initialize variables
const pikachus = [
  {
    id: 1,
    name: "1st prize - 30% OFF",
    image: "./images/peka_farfetchd.png",
    prize: 30,
  },
  {
    id: 2,
    name: "2nd prize - 25% OFF",
    image: "./images/peka_jigglypuff.png",
    prize: 25,
  },
  {
    id: 3,
    name: "3rd prize -20% OFF",
    image: "./images/peka_magikarp.png",
    prize: 20,
  },
  {
    id: 4,
    name: "4th prize - 15% OFF",
    image: "./images/peka_meowth.png",
    prize: 15,
  },
  {
    id: 5,
    name: "5th prize - 10% OFF",
    image: "./images/peka_pansage.png",
    prize: 10,
  },
  {
    id: 6,
    name: "6th prize - 8% OFF",
    image: "./images/peka_pikachu.png",
    prize: 8,
  },
  {
    id: 7,
    name: "7th prize - 6% OFF",
    image: "./images/peka_psyduck.png",
    prize: 6,
  },
  {
    id: 8,
    name: "8th prize - 4% OFF",
    image: "./images/peka_snorlax.png",
    prize: 4,
  },
  {
    id: 9,
    name: "9th prize - 2% OFF",
    image: "./images/peka_保母蟲.png",
    prize: 2,
  },
];

/*
 **  End of Initialization
 */

/*
 **  Functions
 */

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const start_game = async () => {
  prize.innerText = "";
  let initial = 5;
  const result = Math.floor(Math.random() * pikachus.length);

  while (initial > 0) {
    for (let i = 0; i < pikachus.length; i++) {
      pikapika.src = pikachus[i].image;
      await sleep(100);
    }
    initial--;
  }
  pikapika.src = pikachus[result].image;
  prize.innerText = pikachus[result].name;
  localStorage.setItem("discount_percent", pikachus[result].prize);
};




/*
 **  End of functions
 */

var pokemon = [
  "peka_farfetchd",
  "peka_jigglypuff",
  "peka_magikarp",
  "peka_meowth",
  "peka_pansage",
  "peka_pikachu",
  "peka_psyduck",
  "peka_snorlax",
  "peka_保母蟲",
];





var board = [];
var rows = 7;
var columns = 7;
var score = 0;
var result = 0;
var currTile;
var otherTile;
var showScore = []




window.onload = function () {


  pokemonCrushStart();

  window.setInterval(function () {
    crushPokemon();
    slidepokemon();
    generatePokemon();
  }, 100);


function randomPokemon() {
  return pokemon[Math.floor(Math.random() * pokemon.length)];
}



function pokemonCrushStart() {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = "./images/" + randomPokemon() + ".png";

      tile.addEventListener("dragstart", dragStart); //initialize drag process
      tile.addEventListener("dragover", dragOver); //click to drag
      tile.addEventListener("dragenter", dragEnter); //drag to another pokemon
      tile.addEventListener("dragleave", dragLeave); //leave pokemon over another one
      tile.addEventListener("dragend", dragEnd); // after the drag process,swap
      tile.addEventListener("drop", dragDrop); //dropping pokemon over another one

      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);
}
 
function dragStart() {
  currTile = this;

     // Set a timeout to add the 'disable' class
     setTimeout(() => {
      const showScore=document.getElementById("showScore")
      showScore.classList.add("open");
       console.log("open showScore");
       document.getElementById("score1").innerText = score;
       if (score >= 300){
        document.getElementById("result").innerText = "Coupon Code: GBF888"
       }else{
        document.getElementById("result").innerText = "Try Again!"

       }
       
     }, 25000);
  
   }


function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
  //this means the target tile that was dropped on
  otherTile = this;
}
function dragEnd() {
  if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
    return;
  }

  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = c2 == c - 1 && r == r2;
  let moveRight = c2 == c + 1 && r == r2;

  let moveUp = r2 == r - 1 && c == c2;
  let moveDown = r2 == r + 1 && c == c2;
  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    let validMove = checkValid();
    if (!validMove) {
      let currImg = currTile.src;
      let otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;
    }
  }
}

function crushPokemon() {
  //crushFive();
  //crushFour();
  crushThree();
  document.getElementById("score").innerText = score;
}

function crushThree() {
  //check row
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      let pokemon1 = board[r][c];
      let pokemon2 = board[r][c + 1];
      let pokemon3 = board[r][c + 2];
      // let pokemon4 = board[r][c + 3];
      if (
        pokemon1.src == pokemon2.src &&
        pokemon2.src == pokemon3.src &&
        !pokemon1.src.includes("blank")
      ) {
        pokemon1.src = "./images/blank.png";
        pokemon2.src = "./images/blank.png";
        pokemon3.src = "./images/blank.png";
        // pokemon4.src = "./images/blank.png";
        score += 30;
      }
    }
  }
  //check column
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let pokemon1 = board[r][c];
      let pokemon2 = board[r + 1][c];
      let pokemon3 = board[r + 2][c];
      // let pokemon4 = board[r + 3][c];
      if (
        pokemon1.src == pokemon2.src &&
        pokemon2.src == pokemon3.src &&
        !pokemon1.src.includes("blank")
      ) {
        pokemon1.src = "./images/blank.png";
        pokemon2.src = "./images/blank.png";
        pokemon3.src = "./images/blank.png";
        // pokemon4.src = "./images/blank.png";
        score += 30;
      }
    }
  }
}



function checkValid() {
  //check row
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      let pokemon1 = board[r][c];
      let pokemon2 = board[r][c + 1];
      let pokemon3 = board[r][c + 2];
      // let pokemon4 = board[r][c + 3];
      if (
        pokemon1.src == pokemon2.src &&
        pokemon2.src == pokemon3.src &&
        !pokemon1.src.includes("blank")
      ) {
        return true;
      }
    }
  }
  //check column
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let pokemon1 = board[r][c];
      let pokemon2 = board[r + 1][c];
      let pokemon3 = board[r + 2][c];
      // let pokemon4 = board[r + 3][c];
      if (
        pokemon1.src == pokemon2.src &&
        pokemon2.src == pokemon3.src &&
        !pokemon1.src.includes("blank")
      ) {
        return true;
      }
    }
  }
  return false;
}

function slidepokemon() {
  for (let c = 0; c < columns; c++) {
    let ind = rows - 1;
    for (let r = columns - 1; r >= 0; r--) {
      if (!board[r][c].src.includes("blank")) {
        board[ind][c].src = board[r][c].src;
        ind -= 1;
      }
    }
    for (let r = ind; r >= 0; r--) {
      board[r][c].src = "./images/blank.png";
    }
  }
}

function generatePokemon() {
  for (let c = 0; c < columns; c++) {
    if (board[0][c].src.includes("blank")) {
      board[0][c].src = "./images/" + randomPokemon() + ".png";
    }
  }
}
}


// jumpBoard
// let jumpBoard;
// let jumpBoardWidth=500;
// let jumpBoardHeight=576;
// let context;

// window.onload=function(){
//   jumpBoard=document.getElementById("jumpBoard");
//   jumpBoard.height=jumpBoardHeight;
//   jumpBoard.width=jumpBoardWidth;
//   context=jumpBoard.getContext("2d");

