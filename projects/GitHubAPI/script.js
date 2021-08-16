"use strict";

const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getUser = async function (username) {
  try {
    const { data } = await axios(API_URL + username);
    console.log(data);
    createUsercard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile matching this username.");
    } else {
      console.error(`⛔ ${err.msg}`);
    }
  }
};

const getRepos = async function (username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposCard(data);
  } catch (err) {
    createErrorCard("Problem finding repos.");
  }
};

const createUsercard = function (user) {
  const cardMarkup = `<div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos"></div>
        </div>
      </div>`;

  main.innerHTML = cardMarkup;
};

const createErrorCard = function (msg) {
  const cardMarkup = `<div class="card">
                          <h1>${msg}</h1>
                      </div>`;
  main.innerHTML = cardMarkup;
};

const addReposCard = function (repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 15).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) getUser(user);
  search.value = "";
});
