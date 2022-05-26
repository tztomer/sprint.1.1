"use-strict";

gNumbers = [];

// function createNumbers(board, num) {
//   console.log("nums1");
//   for (let i = 0; i < num; i++) {
//     // gCollect.add(iPosition, jPosition);
//     // let iPosition = getRandomIntInt(0, 3);
//     // let jPosition = getRandomIntInt(0, 3);
//     console.log("im hehre");
//     let create = createNumber(board, iPosition, jPosition);
//   }
// }

function createNumber(board, i, j) {
  const nums = {
    location: {
      i,
      j,
    },
    isShown: false,
    // nums: num,
    // icon: num,
  };

  // gNumbers.push(nums.location);
  // board[nums.location.i][nums.location.j] = nums.location;
  // let currLocation = nums.location;
  // console.log(nums.icon);
  // renderCell(currLocation, `<td>${nums.nums}</td>`);
  // return nums.nums;
  // console.log("nummber func", nums.nums);
  // return number;
}

function getGhostHTML(mines) {
  return `<td>${MINES}</td>`;
}
// console.log(collect);
