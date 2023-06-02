'use strict';
// 501 movies total

let container = document.querySelector('.container');
let poster = document.querySelector('.poster');
let block = document.querySelector('.block');
let description = document.querySelector('.description');
let h1 = document.querySelector('.name');
let back = document.querySelector('.back');
let blockType = document.querySelector('.block1');
let actors = document.querySelector('.actors');
let input = document.querySelector('#num');
let modalwindow = document.querySelector('.modalwindow');
let maxFilms = 10; // сколько фильмов отрисовать на главной
let shortdescription;

let filmCards;
let uniqFilms;
let allFilms;

fetch(`https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs.json`)
    .then(res => res.json())
    .then(data => {
        allFilms = data;
        uniqFilms = randomFilms(maxFilms);
        for (let film of uniqFilms) {
            let genres = '';
            film.genres.forEach(g => (genres += g.name += ' '));
            container.innerHTML += `<div class="filmCard" data-id="${film.id}"><div class="kp">${film.rating.kp.toFixed(
                1
            )}</div><img data-id="${film.id}" src="${
                film.poster.previewUrl
            }" alt="posterFilm" class="posterPreview"><div class="shortdescription">${film.name}<br>(${genres})</div>
            </div>`;
            // shortdescription = document.querySelector('.shortdescription');
            // for (let count = 0; count < film.genres.length; count++) {
            //     shortdescription.innerHTML += `${film.genres[count].name},`;
            // }
        }

        filmCards = document.querySelectorAll('.filmCard');
        filmCards.forEach(card =>
            card.addEventListener('click', event => {
                // console.log(event.target.dataset.id); //

                renderModal(event.target.dataset.id);
                modalwindow.classList.remove('invisible');
                container.classList.add('invisible');
            })
        );
    });

back.addEventListener('click', () => {
    modalwindow.classList.add('invisible');
    container.classList.remove('invisible');
});

function renderModal(id) {
    actors.innerHTML = '';
    h1.innerHTML = '';
    blockType.innerHTML = '';
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
            blockType.innerHTML += `<div class="type"><div >Оценка:</div> <div class="type2">Кинокритики: ${uniqFilms[
                index
            ].rating.kp.toFixed(1)}, Кинопоиск: ${uniqFilms[index].rating.kp.toFixed(1)}.</div></div>`;
            blockType.innerHTML += `<div class="type"><div>Год:</div><div class="type2"> ${uniqFilms[index].year}</div></div>`;
            blockType.innerHTML += `<div class="type"><div>Страна:</div> <div class="type2">${uniqFilms[index].countries[0].name}</div></div>`;
            blockType.innerHTML += `<div class="type"><div>Слоган:</div> <div class="type2">${uniqFilms[index].slogan}</div></div>`;
            blockType.innerHTML += `<div class="type"><div>Часов:</div> <div class="type2">${hours.toFixed(
                0
            )}, минут: ${minutes}</div></div>`;
            blockType.innerHTML += `<div class="type"><div>Жанры:</div><div class="type2 genres"></div></div>`;
            let genres = document.querySelector('.genres');
            genres.innerHTML = '';
            for (let count = 0; count < uniqFilms[index].genres.length; count++) {
                genres.innerHTML += `<span>${uniqFilms[index].genres[count].name};</span>  `;
            }
            description.innerHTML = `<p>${uniqFilms[index].description}</p>`;
            for (let count = 0; count < 5; count++) {
                actors.innerHTML += `<span class="type_name">${uniqFilms[index].persons[count].name} <img class="photo" src="${uniqFilms[index].persons[count].photo}"></span> `;
                // actors.innerHTML += ``;
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
