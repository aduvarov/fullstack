'use strict';

let btn = document.querySelector('.btn');

function makeRndNum() {
    let rnd = 0;
    let numbers = [];
    return function () {
        do {
            rnd = randomInteger(1, 10);
        } while (numbers.includes(rnd) && numbers.length < 10);
        if (numbers.length >= 10) {
            btn.innerText = 'Готово';
        } else {
            numbers.push(rnd);
            btn.innerText = rnd;
        }
    };
}
let rndNum = makeRndNum();
btn.addEventListener('click', rndNum);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
