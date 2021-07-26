"use strict";

const btn = document.querySelector(".random");
const card = document.getElementById("card");

const renderAmiibo = function (amiibo) {
  const html = `<img src="${amiibo.image}" alt="${amiibo.name}" />
          <h2 class="name">${amiibo.name}</h2>
          <span class="gameSeries">${amiibo.gameSeries}</span>
          <span class="type">${amiibo.type}</span>
          <p class="numId">${amiibo.head + amiibo.tail}</p>`;
  card.insertAdjacentHTML("beforeend", html);
};

const getAmiibo = async function () {
  try {
    const data = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const amiibo = await data.json();
    const randomAmiibo = Math.floor(Math.random() * amiibo.amiibo.length - 1);
    renderAmiibo(amiibo.amiibo[`${randomAmiibo}`]);
  } catch (error) {
    throw new Error(
      `We're sorry, this Amiibo is unavailable for now. (${error.message})`
    );
  }
};

const displayAmiibo = function () {
  if (!card === "") {
    getAmiibo();
  } else {
    card.innerText = "";
    getAmiibo();
  }
};

btn.addEventListener("click", displayAmiibo);
displayAmiibo();
