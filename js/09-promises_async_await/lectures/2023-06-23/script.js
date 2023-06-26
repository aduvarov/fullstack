'use strict';

// console.log(1);
// setTimeout(console.log, 1000, 2);
// console.log(3);
// setTimeout(console.log, 500, 4);
// setTimeout(console.log, 2500, 5);
// setTimeout(console.log, 0, 6);

// https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs/115.json

let poster = document.querySelector('.filmCard__poster');
let nameFilm = document.querySelector('.filmCard__nameFilm');

const URL = 'https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs/115.json';

let xhr = new XMLHttpRequest();

xhr.open('GET', URL);
xhr.send();
xhr.onload = renderFilmCard;

function renderFilmCard() {
    console.dir(xhr.response);
    let film = JSON.parse(xhr.response);
    console.dir(film);
    poster.innerHTML = `<img height="200" src=${film.poster.url} alt="постер фильма"></img>`;
    nameFilm.innerHTML = film.name;
}
