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
  createMine(gBoard, 50, 0, 16);

  checkMine(gBoard);
  hendelEvents(gBoard);
  // checkNeg(gBoard);
  sumMine(gBoard);
  console.table(gBoard);

  // console.log(gBoard);
  // var flat = gBoard.flat();
  // console.log(flat);
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
      // console.log("board", board.length);
      // renderCell(board[i][j].location, `<span>${MINES}</span>`);

      if (j - 1 < 0) continue;
      else let = jOffset = j - 1;

      if (j + 1 > board[0].length) continue;
      else let = jInset = j + 1;

      if (i - 1 < 0) continue;
      else let = iOffset = i - 1;

      if (i + 1 === board[0].length || i === 16) continue;
      else let = iInset = i + 1;

      // if (board[i][j].isMine) {
      //  enderCell(board[i][j].location, `<span>1</span>`);
      //   }
      // }

      if (!board[i][j].isMine) {
        createNumber(board, i, j);
        // 1
        if (
          !board[i][jOffset]?.isMine ||
          (!board[i][jInset]?.isMine && !board[iOffset][j]?.isMine) || // top same j
          !board[iOffset][jInset]
        ) {
          renderCell(board[i][j].location, `<span>1</span>`);
        }

        if (
          // option 1 top right
          !board[iOffset][j]?.isMine && // top same j
          !board[iOffset][jInset]?.isMine &&
          !board[i][jInset]?.isMine // row cell right
          // (!board[iOffset][j]?.isMine && // top same j
          //   !board[iInset][jOffset]?.isMine &&
          //   !board[i][jOffset]?.isMine) ||
          // (!board[i][jOffset]?.isMine && // row cell left
          //   !board[iInset][jOffset]?.isMine &&
          //   !board[iInset][j]?.isMine) ||
          // (!board[iInset][jInset]?.isMine && !board[i][jInset]?.isMine && !board[iInset][jInset]?.isMine)
        ) {
          renderCell(board[i][j].location, `<span>3</span>`);
        }

        if (
          !board[i][jOffset]?.isMine && // row cell left
          !board[i][jInset]?.isMine && // row cell right
          !board[iOffset][j]?.isMine &&
          !board[iInset][j]?.isMine &&
          !board[iOffset][jOffset]?.isMine &&
          !board[iOffset][jInset]?.isMine &&
          !board[iInset][jOffset]?.isMine &&
          !board[iInset][jInset]?.isMine
        ) {
          renderCell(board[i][j].location, `<span>0</span>`);
          continue;
        }

        // if (!board[iInset][j]?.isMind && !board[iOffset][j]?.isMind && !board[iOffset][jOffset]?.isMind && !board[iInset][jInset]?.isMind) {
        //   renderCell(board[i][j].location, `<span>0</span>`);
        // }
      }

      // console.log(number);
      // }
    }
    // if (pos.Iinset > board[0].length) i;
    // break;
  }
}
