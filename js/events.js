"use-strict";

function hendelEvents(board) {
  let cells = document.querySelectorAll("td");

  // console.log(cells);
  cells.forEach(function (el) {
    el.addEventListener("click", e => {
      console.log(e);
    });

    el.addEventListener("contextmenu", e => {
      e.preventDefault();
      e.textContent = "📍";
      e.target.innerText = e.textContent;
      console.log(e.target);
    });
  });
}
