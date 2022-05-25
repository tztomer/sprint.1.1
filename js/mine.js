"use-strict";

gMines = [];

function createMine(board, i, j) {
  var mine = {
    location: {
      i,
      j,
    },
    isShown: true,
    icon: MINES,
  };
  gMines.push(mine);
  board[mine.location.i][mine.location.j] = mine.isShown;
  let currLocation = mine.location;
  console.log(mine.icon);
  renderCell(currLocation, `<td>${mine.icon}</td>`);
}

function createMines(board, num) {
  console.log("dfjdslkfj");

  for (let i = 0; i < num; i++) {
    createMine(board, getRandomIntInt(1, 4), getRandomIntInt(1, 4));
  }
}

function getGhostHTML(mines) {
  return `<td>${MINES}</td>`;
}
