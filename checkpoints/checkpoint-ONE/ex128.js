'use strict';

//Разработать функцию проверки монетки из задания ex127. Выводящую процентное соотношение выпадания орлов и решек
// result object

let orel = 0;
let reshka = 0;

function randomCoin() {
    let rnd = 0;
    rnd = randomInteger(1, 2);
    if (rnd === 1) {
        return 'orel';
    } else {
        return 'reshka';
    }
}

function dropoutRate(orel, reshka) {
    let rnd = 0;
    for (let index = 0; index < 10000; index++) {
        rnd = randomInteger(1, 2);
        if (rnd === 1) {
            orel++;
        } else {
            reshka++;
        }
    }
    orel = orel.toString()[0] + orel.toString()[1];
    reshka = reshka.toString()[0] + reshka.toString()[1];
    return { orel: `${orel}%`, reshka: `${reshka}%` };
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
