"use-strict";

console.log("DOM fully loaded and parsed");
// s
let innerContainer = document.querySelector(".container");

// console.log(mines);
// console.log(popup);
let popup = document.querySelector(".popup");
let p = document.querySelector(".popup p");
let btn = document.querySelector(".play");

function showPopup() {
  btn.innerText = "Let Play Again 🤘🏽";
  popup.classList.add("showMe");
  p.innerText = "Sorry You lose 🤪";

  return popup;
}

function hendelEvents(board) {
  innerContainer.addEventListener("click", e => {
    console.log("e", e.target.classList.value);
    // console.log("yes");
    if (e.target.classList.value === "mine") {
      showPopup();
    } else if ((e.target.className = "button.play")) {
      popup.classList.remove("showMe");
      initGame();
    }
  });

  // el.addEventListener("contextmenu", e => {
  //   e.preventDefault();
  //   e.textContent = "📍";
  //   e.target.innerContent = e.textContent;
  //   console.log(e.target);
  // });
}
