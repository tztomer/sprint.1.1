"use-strict";

const FLAG = "📍";
const MINES = "💥";
const SMILE_HAPPY = "😁";
const SMILE_SAD = "😔";
let GRAYBOX = "";

let container = document.querySelector(".boardContainer").className;
let selector = `.${container}`;

// console.log(minsNumers);

console.log(selector);

let gBoard = [];

function initGame() {
  console.log("im init");
  gBoard = createBoard();

  renderBoard(gBoard, selector);

  // console.log("fdsfdsfds", createMines(gBoard, 4));
  checkNeg(gBoard);
  sumMine(gBoard);
  // checkNeg(gBoard);

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

function checkNeg(gBoard) {
  var locationNotAllow = [];
  var cell = 0;
  for (let i = 0; i < gBoard.length; i++) {
    for (let j = 0; j < gBoard.length; j++) {
      var mine = createMine(gBoard);
      if (gBoard[i][j] === true) continue;
      createNumber(gBoard, mine.i++, mine.i++);
      // cell = "<td>num?</td>";
      // let ip = i;
      // let ij = j;
      // let obj = {
      //   i: ip,
      //   j: ij,
      // };

      // renderCell(obj, cell);
    }
  }
}

// [Array(2), Array(2), Array(2)]

//
// console.table(innerBoard);
// function createNumber(gNumbers, i, j, nums) {
//   const number = {
//     location: {
//       i,
//       j,
//     },
//     isShown: false,
//     nums: nums,
//   };

//   gNumbers.push(number);
//   let currLocation = number.location.i;
//   gNumbers[number.location.i] = number.isShown;
//   let obj = { i: number.i, j: number.j };
//   renderCell(obj, `<td>${number.nums}</td>`);

//   // console.log("nummber func", number.nums);
//   // return number;
// }
