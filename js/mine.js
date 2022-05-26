"use-strict";

gMines = [];

let collect = [];
function createMine(board) {
  var mine = {
    location: {
      i: getRandomIntInt(0, 4),
      j: getRandomIntInt(0, 4),
    },
    isShown: true,
    icon: MINES,
  };

  // gMines.push(mine.location);
  board[mine.location.i][mine.location.j] = mine;
  let currLocation = mine.location;
  // console.log(mine.icon);
  renderCell(currLocation, `<td>${mine.icon}</td>`);
  return mine.location;
}

// function createMines(board, num) {
//   console.log("dfjdslkfj");
//   for (let i = 0; i < num; i++) {
//     // gCollect.add(iPosition, jPosition);
//     console.log("im hehre");
//     createMine(board);
//   }
// }

// const arr = [6, 4., 6, 7, [1, 2, 3], [2, 3, 1]];

// const res = arr.filter(pos1 => pos1 <= 3);
// console.log("res", res);
