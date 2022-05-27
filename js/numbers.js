"use-strict";

gNumbers = [];

function createNumber(board, i, j, num = null) {
  const nums = {
    location: {
      i,
      j,
    },
    isShown: true,
    isNumber: true,
    num,
    icon: "📍",
  };

  gNumbers.push(nums.location);
  board[nums.location.i][nums.location.j] = nums;

  // renderCell(currLocation, `<td>${nums.nums}</td>`);
  return nums;
}

// console.log(collect);
