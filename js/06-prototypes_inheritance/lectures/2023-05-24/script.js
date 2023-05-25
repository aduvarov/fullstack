'use strict';
// 501 movies total

let container = document.querySelector('.container');
let poster = document.querySelector('.poster');
let block = document.querySelector('.block');
let description = document.querySelector('.description');
let h1 = document.querySelector('.name');
let info = document.querySelector('.block__info');
let actorsName = document.querySelector('.actor__name');
let actorsPhoto = document.querySelector('.actor__photo');
let input = document.querySelector('#num');
let modalwindow = document.querySelector('.modalwindow');
let maxFilms = 10; // сколько фильмов отрисовать на главной
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

function renderModal(id) {
    actorsName.innerHTML = 'Актёры:';
    actorsPhoto.innerHTML = '';
    h1.innerHTML = '';
    info.innerHTML = '';
    description.innerHTML = '';
    let minutes = 0;
    let hours = 0;
    for (let index = 0; index < maxFilms; index++) {
        if (uniqFilms[index].id == id) {
            hours = uniqFilms[index].movieLength / 60;
            minutes = uniqFilms[index].movieLength % 60;
            poster.innerHTML = `<img src="${uniqFilms[index].poster.previewUrl}" alt="posterFilm" class="modal__poster"></img>`;
            console.log(uniqFilms[index]);
            h1.innerHTML = `<h1>${uniqFilms[index].name}</h1>`;
            info.innerHTML += `<div class="type">Кинокритики: ${uniqFilms[index].rating.kp.toFixed(
                1
            )}, Кинопоиск: ${uniqFilms[index].rating.kp.toFixed(1)}.</div>`;
            info.innerHTML += `<div class="type">${uniqFilms[index].year}</div>`;
            info.innerHTML += `<div class="type"> ${uniqFilms[index].countries[0].name}</div>`;
            info.innerHTML += `<div class="type">${uniqFilms[index].slogan}</div>`;
            info.innerHTML += `<div class="type"></div>`;
            info.innerHTML += `<div class="type">Часов: ${hours.toFixed(0)}, минут: ${minutes}</div>`;
            info.innerHTML += `<div class="type"></div>`;
            for (let count = 0; count < uniqFilms[index].genres.length; count++) {
                info.innerHTML += `<span class="type">${uniqFilms[index].genres[count].name};</span>  `;
            }
            description.innerHTML = uniqFilms[index].description;
            for (let count = 0; count < 5; count++) {
                actorsName.innerHTML += `<span class="type">${uniqFilms[index].persons[count].name};</span> `;
            }
            for (let count = 0; count < 5; count++) {
                actorsPhoto.innerHTML += `<img class="photo" src="${uniqFilms[index].persons[count].photo}">`;
            }
        }
    }
}

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
