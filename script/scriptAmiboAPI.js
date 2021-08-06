"use strict";

const btn = document.querySelector(".random");
const card = document.getElementById("card");

const renderAmiibo = function (amiibo) {
  const html = `<h2 class="text-capitalize text-white font-weight-bold p-3">${
    amiibo.name
  }</h2>
  <img class="w-auto img-fluid w-100 mw-100" src="${amiibo.image}" alt="${
    amiibo.name
  }" />
  <span class="text-capitalize text-white font-weight-bold p-3">${
    amiibo.gameSeries
  } --- ${amiibo.type}</span>
  <p class="text-white bg-dark m-2 numId">${amiibo.head + amiibo.tail}</p>`;
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
      `We're sorry, this Amiibo's data is unavailable for now. (${error.message})`
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
