"use strict";

// $(function () {
//   $(".navbar a, footer a").on("click", function (event) {
//     event.preventDefault();
//     const hash = this.hash;

//     $("body, html").animate(
//       { scrollTop: $(hash).offset().top },
//       850,
//       function () {
//         window.location.hash = hash;
//       }
//     );
//   });
// });

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
