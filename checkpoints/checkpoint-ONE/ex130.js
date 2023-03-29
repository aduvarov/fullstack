'use strict';

//ex130:
// Разработать функцию проверки кубика из задания ex129. Выводящую процентное соотношение выпадания чисел от 1 до 6
// result object

let side1 = 0;
let side2 = 0;
let side3 = 0;
let side4 = 0;
let side5 = 0;
let side6 = 0;

function randomCube() {
    let rnd = 0;
    rnd = randomInteger(1, 6);
    if (rnd === 1) {
        return 1;
    } else if (rnd === 2) {
        return 2;
    } else if (rnd === 3) {
        return 3;
    } else if (rnd === 4) {
        return 4;
    } else if (rnd === 5) {
        return 5;
    } else if (rnd === 6) {
        return 6;
    }
}

function dropoutRate(side1, side2, side3, side4, side5, side6) {
    let rnd = 0;
    for (let index = 0; index < 10000; index++) {
        rnd = randomInteger(1, 6);
        if (rnd === 1) {
            side1++;
        } else if (rnd === 2) {
            side2++;
        } else if (rnd === 3) {
            side3++;
        } else if (rnd === 4) {
            side4++;
        } else if (rnd === 5) {
            side5++;
        } else if (rnd === 6) {
            side6++;
        }
    }
    side1 = side1 / 100;
    side2 = side2 / 100;
    side3 = side3 / 100;
    side4 = side4 / 100;
    side5 = side5 / 100;
    side6 = side6 / 100;

    return {
        side1: `${side1}%`,
        side2: `${side2}%`,
        side3: `${side3}%`,
        side4: `${side4}%`,
        side5: `${side5}%`,
        side6: `${side6}%`,
    };
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
