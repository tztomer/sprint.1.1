"use-strict";

let minsNumers = document.querySelector(".minsNumers");
function sumMine(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      console.log("render", mat[i][j]);
      if (mat[i][j].isShown === true) {
        console.log("inm here");
        sum += 1;
      }
    }
  }
  console.log("dum", sum);
  minsNumers.textContent = sum;
}

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
  let elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  console.log("elcell", elCell);
  elCell.innerHTML = value;
}

function getRandomIntInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var test = getRandomIntInt(1, 3);
console.log(test);
