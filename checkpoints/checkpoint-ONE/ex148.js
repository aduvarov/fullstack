'use strict';

// Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 100 элементов, с интервалом от 1 до 50
// включительно. Написать функцию для нахождения кол-ва максимальных элементов в массиве и кол-ва минимальных элементов в массиве.

let a = 1;
let b = 50;
let n = 100;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    let c = 1;
    let arr = [];
    numbers.sort(compareNumbers);
    for (let index = 1; index < 100; index++) {
        if (numbers.at(-index) === numbers.at(-index - 1)) {
            c = c + 1;
        } else {
            arr.push(c);
            break;
        }
    }
    c = 1;
    for (let index = 0; index < 100; index++) {
        if (numbers[index] === numbers[index + 1]) {
            c = c + 1;
        } else {
            arr.push(c);
            break;
        }
    }

    return `${arr} ${numbers} `;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compareNumbers(a, b) {
    return a - b;
}
