'use strict';

//Разработать функцию проверки монетки из задания ex127. Выводящую процентное соотношение выпадания орлов и решек
// result object

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
    orel = orel / 100;
    reshka = reshka / 100;
    return { orel: `${orel}%`, reshka: `${reshka}%` };
}

function randomInteger() {
    let rand = 1 + Math.random() * (2 + 1 - 1);
    return Math.floor(rand);
}
