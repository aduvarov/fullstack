'use strict';
// 501 movies total

let container = document.querySelector('.container');
let input = document.querySelector('#num');
let modalwindow = document.querySelector('.modalwindow');
let maxFilms = 50; // сколько фильмов отрисовать на главной
let filmCards;
let uniqFilms;
let allFilms;

fetch(`https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs.json`)
    .then(res => res.json())
    .then(data => {
        allFilms = data;
        uniqFilms = randomFilms(maxFilms);
        for (let film of uniqFilms) {
            container.innerHTML += `<div class="filmCard" data-id="${film.id}"><img data-id="${film.id}" src="${film.poster.previewUrl}" alt="posterFilm" class="posterPreview"></div>`;
        }
        filmCards = document.querySelectorAll('.filmCard');
        filmCards.forEach(card =>
            card.addEventListener('click', event => {
                console.log(event.target.dataset.id); //
                renderModal(event.target.dataset.id);
                modalwindow.classList.remove('invisible');
            })
        );
    });

modalwindow.addEventListener('click', () => {
    modalwindow.classList.add('invisible');
});

function renderModal(id) {}

function randomFilms(max) {
    let filmNum = 0;
    let films = new Set();
    // Набивает массив из фильмов размером max
    while (films.size < max) {
        films.add(allFilms[randomInteger(0, 501)]);
    }
    return Array.from(films);
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
