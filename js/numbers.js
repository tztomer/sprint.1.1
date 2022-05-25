"use-strict";
// tstt
gMines = [];

function creatNum(board) {
  var num = {
    location: {
      i,
      j,
    },
    isShown: true,
  };
  gMines.push(mine);
  board[num.location.i][num.location.j] = num.isShown;
  let currLocation = num.location;
  console.log(num.icon);
  renderCell(currLocation, `<td>${mine.icon}</td>`);
}

function createNums(board, num) {
  console.log("dfjdslkfj");
  for (let i = 0; i < num; i++) {
    createNums(board, getRandomIntInt(0, 3), getRandomIntInt(0, 3));
  }
  return;
}

function getGhostHTML(mines) {
  return `<td>${MINES}</td>`;
}
