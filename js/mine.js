"use-strict";

gMines = [];

//  Keep running antli׳a you find me different positions!!!!!!!
function createMine(MinsNum) {
  const mineObject = [];

  while (mineObject.length <= MinsNum) {
    var mine = {
      location: {
        i: getRandomIntInt(0, 4),
        j: getRandomIntInt(0, 4),
      },
      isShown: false,
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

      let exclude = arr.splice(i, 1);
      return exclude;
    }
  });

  mineObject.forEach(function (row, i, arr) {
    gBoard[row.location.i][row.location.j] = row;
  });

  // console.log("gmias", gMines);
  // console.log(found);

  return gBoard;
}
