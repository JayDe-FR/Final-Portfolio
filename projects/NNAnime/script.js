const perks = document.querySelector("#section-perks");
const toReveal = document.querySelectorAll(".reveal");
const triggerAppearance = window.innerHeight * 0.8;

window.addEventListener("scroll", setOpacity);

function setOpacity() {
  toReveal.forEach((section) => {
    const size = perks.getBoundingClientRect().top;
    if (size < triggerAppearance) {
      section.classList.add("reveal");
    } else {
      section.classList.remove("reveal");
    }
  });
}
setOpacity();
