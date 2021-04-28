

let dashboard = document.getElementById('dashboard');
let heros = document.getElementById('heros');

function getToDashboard (){
    window.location.href = "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Dashboar/dashboard.html";
}

function getToHeroes (){
    window.location.href = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Hero_list/hero_list.html';
}

let urlJsonHeros = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/superHeroData.json'
function fetchInfo(url){
    return fetch(url)
    .then((response) => response.json())
    .then((data) => loadPage(data))
}


let detailDiv = document.querySelector('.main__list');
const params = new URLSearchParams(window.location.search);
const idHero = params.get("id");
const indexHero = params.get("index");

function loadPage(arr) {
    let heroId = document.createElement('h1');
    let heroName = document.createElement('h2');
    detailDiv.appendChild(heroName);
    detailDiv.appendChild(heroId);
    heroName.innerText = arr[indexHero]['name'];
    heroId.innerText = arr[indexHero]['id'];
  }

  
  fetchInfo(urlJsonHeros)