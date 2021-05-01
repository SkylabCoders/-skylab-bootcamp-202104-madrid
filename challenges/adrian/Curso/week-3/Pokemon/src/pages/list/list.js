/* (function listPage() {
  getPokes(10, 0).then((pokeResponse) => {
    const [countSpan] = document.getElementsByClassName('total-pokes');
    countSpan.textContent = pokeResponse.count;

    const pokeList = document.getElementById('poke-list');

    pokeResponse.results.forEach((poke) => {
      const element = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.innerText = poke.name;
      anchor.href = `http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Pokemon/src/pages/detail/detail.html?name=${poke.name}`;
      element.appendChild(anchor);
      pokeList.appendChild(element);
    });
  });
}());
*/

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
let thisTimePokemons;
function listPage(url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') {
  getPokes(url).then((pokeResponse) => {
    thisTimePokemons = pokeResponse;
    const pokeList = document.getElementById('poke-list');
    pokeList.innerHTML = '';
    pokeResponse.results.forEach((poke) => {
      const listElement = document.createElement('li');
      const element = document.createElement('a');
      pokeList.appendChild(listElement);
      listElement.appendChild(element);
      element.innerHTML = poke.name;
      element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}`;
    });
  });
}

buttonPrev.addEventListener('click', () => {
  const newUrl = thisTimePokemons.previous;
  if (newUrl !== 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') {
    return listPage(newUrl);
  }
});
buttonNext.addEventListener('click', () => {
  console.log('next');
  const newUrl = thisTimePokemons.next;
  console.log(newUrl);
  debugger;
  return listPage(newUrl);
});

listPage();
