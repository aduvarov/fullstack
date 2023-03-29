'use strict';

//создать функцию монетка. Которая случайным образом возвращает или орёл или решка.
// При запуске функции 10000 раз вероятность распределения орёл - решка должна стремиться к 50%.
// result string

let orel = 0;
let reshka = 0;

function randomCoin(orel, reshka) {
    let rnd = 0;
    rnd = randomInteger(1, 2);
    if (rnd === 1) {
        return 'orel';
    } else {
        return 'reshka';
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
