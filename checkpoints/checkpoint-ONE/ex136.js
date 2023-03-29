'use strict';

// ex136:
// Написать функцию которая принимает (a, b, n), где где a-b интервал от a до b включительно, n - кол-во элементов.
// Функция должна вернуть массив размером n элементов где каждый элемент случайное целое число из интервала.

let a = 45;
let b = 60;
let n = 10;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    return numbers;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
