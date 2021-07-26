"use strict";

const title = document.querySelector("h1");
const twitterLink = document.querySelector("p");
const btn = document.querySelector(".btn");
const displayArea = document.querySelector("#display");

// .Color Randomizer ==> RGB for now
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(200, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

// .Event
btn.addEventListener("click", function () {
  const newColor = randomColor();
  displayArea.style.backgroundColor = newColor;
  displayArea.textContent = newColor;
  title.style.color = newColor;
  twitterLink.style.color = newColor;
});
