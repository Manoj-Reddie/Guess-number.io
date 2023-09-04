"use strict";

let x = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number !!!";
  } else if (guess == x) {
    document.querySelector(".number").textContent = x;
    document.querySelector(".message").textContent = "Correct Number 🔥🔥";

    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < x) {
    score--;
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!!";

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "You lose the game😢.Better luck next time !!";
    }
  } else {
    score--;
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High`!!!";

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        "You lose the game😢.Better luck next time !!";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  x = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
