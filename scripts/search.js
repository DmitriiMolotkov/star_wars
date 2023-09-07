// Методы, которые могут пригодиться:
// starWars.searchCharacters(query),
// starWars.searchPlanets(query),
// starWars.searchSpecies(query).
// starWars.getCharactersById(id),
// starWars.getPlanetsById(id),
// starWars.getSpeciesById(id)

// Тут ваш код.

const searchBtn = document.getElementById("byQueryBtn");
const search = document.getElementById("input_1");
const data = document.getElementById("result-container");
const content = document.getElementById("content");
const load = document.querySelector(".spinner");
const search2 = document.getElementById("input_2");
const idBtn = document.getElementById("byQueryBtn_2");

idBtn.addEventListener('click', getId)
searchBtn.addEventListener("click", heandlerBtn);

function heandlerBtn() {
  load.style.visibility = "visible";
  data.querySelector("p").textContent = search.value;
  content.innerHTML = "";
  const select = document.getElementById("resource");
  if (select.value === "people") {
    getPeople();
  } else if (select.value === "planets") {
    getPlanet();
  } else if (select.value === "species") {
    getSpecies();
  }
}

async function getPeople() {
  let query = search.value;
  const charObj = await starWars
    .searchCharacters(query)
    .then((result) => result.results[0]);

  let id = charObj.homeworld
    .split("/")
    .filter((item) => isFinite(item))
    .join("");
  let planet = await starWars.getPlanetsById(id).then((result) => result.name);
  charObj.homeworld = planet;
  for (let key in charObj) {
    if (Array.isArray(charObj[key])) {
      content.innerHTML += `${key}:<br>`;
      charObj[key].forEach((element) => {
        content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
      });
    } else {
      content.innerHTML += `${key}: ${charObj[key]}</br>`;
    }
  }
  load.style.visibility = "hidden";
  data.style.visibility = "visible";
}

async function getPlanet() {
  let query = search.value;
  content.innerHTML = "";
  const planetObj = await starWars
    .searchPlanets(query)
    .then((result) => result.results[0]);

  for (let key in planetObj) {
    if (Array.isArray(planetObj[key])) {
      content.innerHTML += `${key}:<br>`;
      planetObj[key].forEach((element) => {
        content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
      });
    } else {
      content.innerHTML += `${key}: ${planetObj[key]}</br>`;
    }
  }
  load.style.visibility = "hidden";
  data.style.visibility = "visible";
}

async function getSpecies() {
  let query = search.value;
  content.innerHTML = "";
  const specObj = await starWars
    .searchSpecies(query)
    .then((result) => result.results[0]);

  for (let key in specObj) {
    if (Array.isArray(specObj[key])) {
      content.innerHTML += `${key}:<br>`;
      specObj[key].forEach((element) => {
        content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
      });
    } else {
      content.innerHTML += `${key}: ${specObj[key]}</br>`;
    }
  }
  load.style.visibility = "hidden";
  data.style.visibility = "visible";
}

async function getId() {
  load.style.visibility = "visible"
  const select2 = document.getElementById("resource_2");
  let id = search2.value
  content.innerHTML = ""
  if (select2.value === "people") {
    let idObj = await starWars.getCharactersById(id);
    for (let key in idObj) {
      if (Array.isArray(idObj[key])) {
        content.innerHTML += `${key}:<br>`;
        idObj[key].forEach((element) => {
          content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
        });
      } else {
        content.innerHTML += `${key}: ${idObj[key]}</br>`;
      }
    }
    load.style.visibility = "hidden";
    data.style.visibility = "visible";
  } else if (select2.value === "planets") {
    let idObj = await starWars.getPlanetsById(id);
    for (let key in idObj) {
      if (Array.isArray(idObj[key])) {
        content.innerHTML += `${key}:<br>`;
        idObj[key].forEach((element) => {
          content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
        });
      } else {
        content.innerHTML += `${key}: ${idObj[key]}</br>`;
      }
    }
    load.style.visibility = "hidden";
    data.style.visibility = "visible";
  } else if (select2.value === "species") {
    let idObj = await starWars.getSpeciesById(id);
    for (let key in idObj) {
      if (Array.isArray(idObj[key])) {
        content.innerHTML += `${key}:<br>`;
        idObj[key].forEach((element) => {
          content.innerHTML += `<span>&nbsp&nbsp&nbsp&nbsp</span>${element}</br>`;
        });
      } else {
        content.innerHTML += `${key}: ${idObj[key]}</br>`;
      }
    }
    load.style.visibility = "hidden";
    data.style.visibility = "visible";
  }
}

data.querySelector(".delete").addEventListener("click", () => {
    content.innerHTML = "";
    data.style.visibility = "hidden";
  });


  // searchBtn.addEventListener("click", async function () {
//   load.style.visibility = "visible";
//   let query = search.value;
//   content.innerHTML = "";
//   data.querySelector("p").textContent = search.value;
//   const obj = await starWars.searchCharacters(query);
//   const charObj = obj.results[0];
//   let id = charObj.homeworld
//     .split("/")
//     .filter((item) => isFinite(item))
//     .join("");
//   let planObj = await starWars.getPlanetsById(id);
//   let planet = planObj.name;
//   charObj.homeworld = planet;
//   for (let key in charObj) {
//     if (Array.isArray(charObj[key])) {
//       const valueString = charObj[key].map((item) => item).join("<br>");
//       content.innerHTML += `${key}:<br>${valueString}<br>`;
//     } else {
//       content.innerHTML += `${key}: ${charObj[key]}<br>`;
//     }
//   }
//   load.style.visibility = "hidden";
//   data.style.visibility = "visible";
// });
