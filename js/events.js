"use-strict";

function hendelEvents(board) {
  let cells = document.querySelectorAll("td");

  // console.log(cells);
  cells.forEach(function (el) {
    el.addEventListener("click", e => {
      console.log(e);
    });

    el.addEventListener("contextmenu", e => {
      e.preventDefault;
      console.log(e.target);
    });
  });
}
