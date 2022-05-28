"use-strict";

gMines = [];

//  Keep running antli׳a you find me different positions!!!!!!!
function createMine(board, MinsNum, fromRange, toRange) {
  const mineObject = [];

  while (mineObject.length <= MinsNum) {
    var mine = {
      location: {
        i: getRandomIntInt(fromRange, toRange),
        j: getRandomIntInt(fromRange, toRange),
      },
      isShown: true,
      icon: MINES,
      isMine: true,
      isMarked: false,
    };

    mineObject.push(mine);
  }

  const found = mineObject.find(function (pos, i, arr) {
    if (pos.location.i === mine.location.i && pos.location.j === mine.location.j);
    {
      // console.log(pos);

      return arr.splice(i, 1);
    }
  });
  mineObject.forEach((el, i, arr) => {
    board[el.location.i][el.location.j] = el;
    renderCell({ i: el.location.i, j: el.location.j }, `<span>${MINES}</span>`);
  });

  // console.log(found);
  console.log("mins", mineObject.length);
  return mineObject;
}
