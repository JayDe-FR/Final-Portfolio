"use strict";

const btn = document.querySelector(".btn");
const display = document.getElementById("content");

const renderQuote = function (result) {
  const html = `<h2 class="anime_title">${result.anime}</h2>
        <blockquote class="anime_quote">${result.quote}</blockquote>
        <p class="anime_chara">${result.character}</p>`;
  display.insertAdjacentHTML("beforeend", html);
};

// const getAnimeQuote = function () {
//   fetch("https://animechan.vercel.app/api/random")
//     .then((response) => response.json())
//     .then((quote) => renderQuote(quote))
//     .catch((error) => {
//       new Error(
//         `We're sorry, this quote is unavailable for now. (${error.message})`
//       );
//     });
// };

const getAnimeQuote = async function () {
  try {
    const data = await fetch("https://animechan.vercel.app/api/random");
    const result = await data.json();
    console.log(result);
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
