"use strict";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMessage("No Number. . .");
  } else if (secretNumber === guess) {
    displayMessage("Right Number. . .");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      if (guess > secretNumber) {
        displayMessage("High. . .");
      } else {
        displayMessage("Low. . .");
      }
    } else {
      score = 0;
      displayMessage("You Lost. . .");
      document.querySelector(".score").textContent = score;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
