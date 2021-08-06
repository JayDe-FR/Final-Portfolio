"use strict";

const title = document.querySelector("h1");
const twitterLink = document.querySelector(".twitter");
const icons = document.querySelectorAll(".fas");
const btn = document.querySelector(".btn");
const displayArea = document.querySelector("#display");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

btn.addEventListener("click", function () {
  const newColor = randomColor();
  displayArea.style.backgroundColor = newColor;
  displayArea.textContent = newColor;
  title.style.color = newColor;
  twitterLink.style.color = newColor;
  icons.forEach((icon) => (icon.style.color = newColor));
});
