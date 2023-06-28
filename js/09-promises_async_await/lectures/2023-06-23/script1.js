'use strict';

let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let table = document.querySelector('#table');

let filmId = 0;
let image;
const URL = `https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs/`;
let xhr = new XMLHttpRequest();

btn.addEventListener('click', getMovie);

function getMovie() {
    filmId = input.value;
    xhr.open('GET', `${URL}${filmId}.json`);
    xhr.send();
    xhr.onload = renderTableRow;
}

function renderTableRow() {
    let film = JSON.parse(xhr.response);
    image = document.createElement('img');
    image.height = 200;
    image.src = film.poster.url;
    image.alt = 'постер фильма';
    let tr = document.createElement('tr');
    table.append(tr);
    let tdName = document.createElement('td');
    let tdPoster = document.createElement('td');
    tr.append(tdName, tdPoster);
    tdName.append(film.name);

    image.onload = () => {
        tdPoster.append(image);
    };
}
