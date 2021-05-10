let dashboard = document.getElementById("dashboard");
let heros = document.getElementById("heros");
let listHeros = document.querySelector("#main__list");

function getToDashboard() {
  window.location.href =
    "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Dashboar/dashboard.html";
}

function getToHeroes() {
  window.location.href =
    "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Hero_list/hero_list.html";
}

let urlJsonHeros =
  "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/superHeroData.json";
/*

      function fetchInfo(url) {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => createHerosList(data));
      
    }
*/
class FetchInfo {
  heroList = [];
  constructor() {};

  retrieveData(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => (this.heroList = data));
  }
}

function printHerosDetails(item) {
  let anchorHero = document.createElement("a");
  anchorHero.classList.add("div__anchor--hero");
  listHeros.appendChild(anchorHero);
  anchorHero.innerText = item.id + " " + item.name;
  anchorHero.href =
    "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Details/details.html?id=" +
    item.id +
    "&name=" +
    item.name +
    "&index=" +
    i;
}

function createHerosList(list) {
  for (i = 0; i < list.length; i++) {
    printHerosDetails(list[i]);
  }
}

const heroes = new FetchInfo;
const heroLista = heroes.retrieveData(urlJsonHeros);

createHerosList(heroLista);
//module.exports = { printHerosDetails: printHerosDetails };
