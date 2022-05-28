"use-strict";

const FLAG = "📍";
const MINES = "💥";
const SMILE_HAPPY = "😁";
const SMILE_SAD = "😔";
const NUMBER = ["0", "1", "2", "3"];

let GRAYBOX = "";

const STATUS = {
  HIDDEN: "hidden",
  MANE: "mine",
  NUMBER: "number",
  MARKED: "marked",
};

let container = document.querySelector(".boardContainer").className;
let selector = `.${container}`;
let spans = document.querySelectorAll("span");

// console.log(minsNumers);

console.log(selector);

let gBoard = [];

function initGame() {
  gBoard = createBoard(16);
  renderBoard(gBoard, selector);
  createMine(gBoard, 120, 0, 16);

  checkMine(gBoard);
  hendelEvents(gBoard);
  // checkNeg(gBoard);

  console.table(gBoard);
}

function createBoard(boardZise) {
  const board = [];

  for (let i = 0; i < boardZise; i++) {
    board.push([]);
    for (let j = 0; j < boardZise; j++) {
      board[i][j] = GRAYBOX;
    }
  }

  return board;
}

function checkMine(board) {
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // console.log(cell);
      console.log("board", board.length);
      // renderCell(board[i][j].location, `<span>${MINES}</span>`);

      if (board[i][j] === "") {
        createNumber(board, i, j);

        let jOffset = j - 1 < 0 ? (j = 0) : j - 1;
        let jInset = j + 1 > board[0].length ? (j = 14) : j + 1;
        let iOffset = i - 1 < 0 ? (i = 0) : i - 1;
        let iInset = i + 1 >= board[0].length ? (i = 14) : i + 1;
        let iZero = 0;
        let jZero = 0;

        // console.log("jInset", Iinset);
        // no one love me o
        console.log(i, j, iInset);
        if (!board[iInset][j]?.isMind && !board[iOffset][j]?.isMind && !board[iOffset][jOffset]?.isMind && !board[iInset][jInset]?.isMind) {
          renderCell(board[i][j].location, `<span>0</span>`);
        }
      }

      // console.log(number);
      // }
    }
    // if (pos.Iinset > board[0].length) i;
  }
}
