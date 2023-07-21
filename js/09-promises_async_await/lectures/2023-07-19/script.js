'use strict';

let p1 = document.querySelector('.povar1');
let p2 = document.querySelector('.povar2');
let p3 = document.querySelector('.povar3');
let p4 = document.querySelector('.povar4');

async function makePizza(povar) {
    let result = await rollout('тесто');
    povar.innerHTML += result;
    result = await addMeat(result);
    povar.innerHTML += result;
    result = await addTomato(result);
    povar.innerHTML += result;
    result = await addCheese(result);
    povar.innerHTML += result;
    result = await done();
    povar.innerHTML += result;
}

async function rollout(product) {
    let result = `раскатанное ${product} <br>`;
    pause(rnd());
    return result;
}

async function addMeat(product) {
    let result = `${product} + колбаса <br>`;
    pause(rnd());
    return result;
}

async function addTomato(product) {
    let result = `${product} + помидоры <br>`;
    pause(rnd());
    return result;
}

async function addCheese(product) {
    let result = `${product} + сыр <br>`;
    pause(rnd());
    return result;
}

async function done() {
    let result = 'Готовая пицца <br>';
    pause(rnd());
    return result;
}

makePizza(p1);
makePizza(p2);

function makeVeganPizza(povar) {}

///

function pause(delayMS) {
    let start = Date.now();
    let end = 0;
    do {
        end = Date.now();
    } while (start + delayMS > end);
}
function rnd(min = 1000, max = 3000) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
