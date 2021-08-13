"use strict";

const btn = document.querySelector(".btn");
const display = document.getElementById("content");

const renderSpinner = function() {
  const html = `<div class="d-flex justify-content-center">
                  <div class="spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>`;
  display.insertAdjacentHTML('beforeend', html);
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
    renderSpinner();
    const data = await fetch("https://animechan.vercel.app/api/random");
    const result = await data.json();
    if (!result) {
      renderSpinner();
    } else {
      display.innerText = "";
      renderQuote(result);
    }
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
