"use strict";
const msg = document.querySelector(".message");
const hScore = document.querySelector(".highscore");
const scr = document.querySelector(".score");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const sNumber = document.querySelector(".number");
const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  msg.textContent = "Start guessing...";
  scr.textContent = score;
  sNumber.textContent = "?";
  document.querySelector(".guess").value = " ";
  sNumber.style.width = "15rem";
  document.querySelector("body").style.color = "royalblue";
  document.querySelector("body").style.backgroundColor = "lightblue";
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//REFACTORING WITH FUNCTION : message
const displayMessage = function (message) {
  msg.textContent = message;
};

//HANDLING CLICK EVENTS -- GUESSING NUMBER GAME
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //No input
  if (!guess) {
    displayMessage("⛔ No number !");
    // Winner
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number !");
    document.querySelector("body").style.backgroundColor = "#78e08f";
    sNumber.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      hScore.textContent = highscore;
    }

    //Guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high !" : "📉 Too low !");
      score--;
      scr.textContent = score;
    } else {
      displayMessage("💥 ...Looser... 💥");
      scr.textContent = 0;
    }
  }
});

// .Reset Game
btnAgain.addEventListener("click", resetGame);
