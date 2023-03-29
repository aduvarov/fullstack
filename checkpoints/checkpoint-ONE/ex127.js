'use strict';

//создать функцию монетка. Которая случайным образом возвращает или орёл или решка.
// При запуске функции 10000 раз вероятность распределения орёл - решка должна стремиться к 50%.
// result string

let orel = 0;
let reshka = 0;

function randomCoin(orel, reshka) {
    let rnd = 0;
    for (let index = 0; index < 10000; index++) {
        rnd = randomInteger(1, 2);
        if (rnd === 1) {
            orel++;
        } else {
            reshka++;
        }
    }
    return `${orel} ${reshka}`;
}

function randomInteger() {
    let rand = 1 + Math.random() * (2 + 1 - 1);
    return Math.floor(rand);
}
