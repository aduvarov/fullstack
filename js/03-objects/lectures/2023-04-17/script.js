'use strict';

//json javascript object notation

let user = {
    username: 'Mihail',
    age: 17,
    gender: 'male',
    money: [{ dollars: 500 }, { rubles: 2500 }, { euros: 200 }],
};

// let backendAnswer = fetch(https://api.kinopoisk.dev)
//     '{"rating":{"kp":8.805,"imdb":8.5,"filmCritics":6.8,"russianFilmCritics":100,"await":0},"movieLength":112,"name":"1+1","genres":[{"name":"драма"},{"name":"комедия"},{"name":"биография"}],"top250":16}'

console.log(JSON.stringify(user)); // превращает всё в строку JSON
let film = JSON.parse(backendAnswer); // превращает всё из строки JSON в объект

document.write(film.name);
document.write(film.rating);
