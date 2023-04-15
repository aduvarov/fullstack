'use strict';

//Разработать функцию проверки монетки из задания ex127. Выводящую процентное соотношение выпадания орлов и решек
// result object

let flip = 10000;

function randomCoin() {
    let rnd = 0;
    rnd = randomInteger(1, 2);
    if (rnd === 1) {
        return 'orel';
    } else {
        return 'reshka';
    }
}

function dropoutRate(flip) {
    let orel = 0;
    let reshka = 0;
    let rnd = 0;
    for (let index = 0; index < flip; index++) {
        rnd = randomCoin();
        if (rnd === 'orel') {
            orel++;
        } else {
            reshka++;
        }
    }
    orel = (orel * 100) / flip;
    reshka = (reshka * 100) / flip;
    return { orel: `${orel}%`, reshka: `${reshka}%` };
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(dropoutRate(flip));
