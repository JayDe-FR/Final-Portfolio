"use strict";

const cardBox = document.querySelectorAll(".card-body");
const triggerAppear = window.innerHeight * 0.9;

window.addEventListener("scroll", boxAppear);

function boxAppear() {
  cardBox.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerAppear) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
boxAppear();
