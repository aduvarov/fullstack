'use strict';

let uniqFilms;
let allFilms;

let actors = [];

fetch(`https://kinotop-79025-default-rtdb.europe-west1.firebasedatabase.app/docs.json`)
    .then(res => res.json())
    .then(data => {
        allFilms = data;
        uniqFilms = randomFilms(50);
    })
    .then(data => {
        uniqFilms.forEach(film => {
            let randomYear = randomInteger(1950, 2010);
            let randomMonth = randomInteger(1, 12);
            randomMonth = randomMonth < 10 ? '0' + randomMonth : randomMonth;
            let randomDay = randomInteger(1, 28);
            randomDay = randomDay < 10 ? '0' + randomDay : randomDay;
            let randomDate = `${randomYear}-${randomMonth}-${randomDay}`;
            let personName = film.persons[0].name;

            let person = new Person(personName, randomDate);

            actors.push(person);
        });
    });

function Person(name, birthDay) {
    // this = {};
    this.fullName = name;
    this.birthDay = birthDay;
    // this.[[prototye]] = prototype
    // return this;
}

Person.prototype.getName = function () {
    return this.fullName.split(' ')[0];
};
Person.prototype.getLastName = function () {
    return this.fullName.split(' ')[1];
};
// fill prototype
Person.prototype.money = 1000000;

// Person.prototype.getName = function () {
//     return this.fullName.split(' ')[0];
// };
// Person.prototype.getLastName = function () {
//     return this.fullName.split(' ')[1];
// };
/////////////////////

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

let basket = [];

function Fruit(fruit) {
    this.fruit = fruit;
}
function Vegeteble(vegeteble) {
    this.vegeteble = vegeteble;
}
function Berry(berry) {
    this.berry = berry;
}

let a = new Fruit('asdf');
basket.push(a);
let j = new Fruit('asf');
basket.push(j);
let f = new Fruit('asdf');
basket.push(f);

let n = new Vegeteble('asdfasf');
basket.push(n);
let k = new Vegeteble('hgjgf');
basket.push(k);
let x = new Vegeteble('6yghdfg');
basket.push(x);

let m = new Berry('nvbn');
basket.push(m);
let z = new Berry('mghghj');
basket.push(z);
let l = new Berry('ghjgj');
basket.push(l);

// in by basket

basket.forEach(product => {
    console.log(product.__proto__.constructor.name);
});

let f1 = function () {};

console.dir(f1);

//prototype[[prototype]];

let obj = {};

obj.__proto__ = { x: 2 };

let obj2 = Object.create(obj.__proto__);
