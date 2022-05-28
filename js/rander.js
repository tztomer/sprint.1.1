"use-strict";
let minsNumers = document.querySelector(".minsNumers");
// function sumMine() {
//   let counter = 0;
//   for (let i = 0; i < gBoard.length; i++) {
//     for (let j = 0; j < gBoard.length; j++) {
//       if (gBoard[i][j].isShown) {
//         console.log("log", gBoard[i][j].isShown);
//         counter++;
//       }
//     }
//   }
//   minsNumers.textContent = counter;
//   return counter;
// }

function renderBoard(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      // comet
      var className = "cell cell-" + i + "-" + j;
      strHTML += '<td class="' + className + '"> ' + cell + " </td>";
    }
    strHTML += "</tr>";
  }
  strHTML += "</tbody></table>";
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  console.log("render i j", location.i, location.j);
  let elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  console.log("elcell", elCell);
  elCell.innerHTML = value;
}
function getRandomIntInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
