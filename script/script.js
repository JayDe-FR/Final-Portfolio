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

// document.querySelector(function () {
//   document
//     .querySelector(".navbar a, footer a")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       const hash = this.hash;

//       document
//         .querySelector("body, html")
//         .animate(
//           { scrollTop: document.querySelector(hash).offset().top },
//           850,
//           function () {
//             window.location.hash = hash;
//           }
//         );
//     });
// });

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
