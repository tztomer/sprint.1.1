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
  gBoard = createBoard(4, 4);
  hendelEvents(gBoard);
  renderBoard(gBoard, selector);
  createMine(4);
  checkNeg(gBoard);

  console.table(gBoard);
}

function createBoard(boardZise, MinsNum) {
  const board = [];

  for (let i = 0; i < boardZise; i++) {
    board.push([]);
    for (let j = 0; j < boardZise; j++) {
      board[i][j] = GRAYBOX;

      // let num = createNumber(board, i, j, 0);
      // board[i][j] = num;
    }
  }
  // console.table(innerBoard);
  console.log(board);

  return board;
}
function checkNeg(gBoard) {
  var locationNotAllow = [];

  var cell = 0;
}
// let counter = 1;ג

function checkNeg(board) {
  board.forEach((row, x, arr) => {
    row.forEach((cell, y, arr) => {
      // first run!!!!!
      let counter = 0;
      if (cell.isMine) {
        renderCell(cell.location, `<span>${MINES}</span>`);
      } else {
        let num = createNumber(board, x, y, 0);
        // console.log("num", num);
        let iLocation = num.location.i;
        let jLocation = num.location.j;

        console.log("the undifinde", board?.[iLocation - 1] < 0);
        // console.log("the undifinde", board?.[iLocation + 1][jLocation] === 1);

        // console.log("i", iLocation);
        // console.log("j", jLocation);
        // console.log(cell.isMine);
        // console.log(cell);

        if (board[iLocation][jLocation + 1] === undefined) return;
        if (board[iLocation][jLocation - 1] === undefined) return;
        if (board[iLocation][jLocation + 1] === undefined) return;
        if (board[iLocation][jLocation - 1] === undefined) return;
        if (board?.[iLocation + 1] > 4) return;
        if (board?.[iLocation - 1] < 0) return;
        // else ++counter;
        if (board[iLocation][jLocation].isNumber === board[iLocation][jLocation + 1].isMine) {
          [jLocation + 1].isMine;
          ++counter;
        }
        if (board[iLocation][jLocation].isNumber === board[iLocation][jLocation + 1].isMine) {
          // console.log("board", board[iLocation][jLocation].isNumber === board[iLocation][jLocation - 1].isMine);
          ++counter;
        }

        if (counter >= 1) {
          renderCell({ i: iLocation, j: jLocation }, `<span>${1}</span>`);
        } else if (counter === 2) {
          renderCell({ i: iLocation, j: jLocation }, `<span>${2}</span>`);
        } else if (counter === 3) {
          renderCell({ i: iLocation, j: jLocation }, `<span>${3}</span>`);
        }
        counter = 0;
        // if (board[iLocation + 1][jLocation] === undefined) return;
        // if (board[iLocation - 1][jLocation] === undefined) return;

        // if(board[iLocation][jLocation+1] === cell.isMine)
        // console.log("numObj", numObj);

        // renderCell(cell, `<span>1</span>`);
      }
    });

    // console.log("xy", x);
    // sumMine();
  });
}
