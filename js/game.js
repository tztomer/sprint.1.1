"use-strict";

const FLAG = "📍";
const MINES = "💥";
const SMILE_HAPPY = "😁";
const SMILE_SAD = "😔";
let GRAYBOX = "";

let container = document.querySelector(".boardContainer").className;
let selector = `.${container}`;

let minsNumers = document.querySelector(".minsNumers");
console.log(minsNumers);

console.log(selector);

let gBoard = [];

function initGame() {
  console.log("im init");
  gBoard = createBoard();
  renderBoard(gBoard, selector);
  createMines(gBoard, 4);

  console.table(gBoard);
}

function createBoard() {
  const size = 4;
  const innerBoard = [];
  for (let i = 0; i < size; i++) {
    innerBoard.push([]);
    for (let j = 0; j < 4; j++) {
      innerBoard[i][j] = GRAYBOX;
    }
  }
  // console.table(innerBoard);

  return innerBoard;
}
