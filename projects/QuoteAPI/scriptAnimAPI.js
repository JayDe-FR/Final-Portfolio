"use strict";

const btn = document.querySelector(".btn");
const display = document.getElementById("content");

const renderSpinner = function() {
  const html = `<div class="spinner-border text-warning"></div>`;
  setTimeout(function() {renderSpinner, 1000});
  card.insertAdjacentHTML('beforeend', html);
};

const renderQuote = function (result) {
  const html = `<h2 class="font-weight-bold text-warning text-uppercase m-auto">${result.anime}</h2>
        <blockquote
          class="
            d-flex
            justify-content-center
            align-items-center
            flex-column flex-wrap
            text-white
            font-italic
            font-weight-lighter
            anime_quote
          "
        >${result.quote}</blockquote>
        <p class="font-weight-bold text-primary font-italic anime_chara">${result.character}</p>`;
  display.insertAdjacentHTML("beforeend", html);
};

const getAnimeQuote = async function () {
  try {
    const data = await fetch("https://animechan.vercel.app/api/random");
    const result = await data.json();
    renderQuote(result);
  } catch (error) {
    console.error(
      `We're sorry, this quote is unavailable for now. (${error.message})`
    );
  }
};

const displayQuote = function () {
  if (!display === "") {
    getAnimeQuote();
  } else {
    display.innerText = "";
    getAnimeQuote();
  }
};

btn.addEventListener("click", displayQuote);
getAnimeQuote();
