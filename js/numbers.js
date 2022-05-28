"use-strict";

gNumbers = [];

function createNumber(board, i, j, num = null) {
  const nums = {
    location: {
      i,
      j,
    },
    isShown: false,
    isNumber: true,
    num: num,
    icon: "📍",
  };

  board[i][j] = nums;
  // renderCell({ i: el.location.i, j: el.location.j }, `<span>${MINES}</span>`);

  // console.log(found);
  // console.log(gNumbers);
  return nums;
}

// console.log(collect);
