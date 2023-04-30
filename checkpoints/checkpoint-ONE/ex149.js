'use strict';

//ex149:
// Известна численность каждого из 40 классов школы. Для этого используя функцию из задания ex136 сгенирировать массив из 40 элементов, с интервалом от 15 до 30 включительно.
// Функция. Верно ли, что в самом многочисленном классе учится на 10 уче-
// ников больше, чем в самом малочисленном?
// result boolean
let a = 15;
let b = 30;
let n = 40;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    numbers.sort(compareNumbers);
    if (numbers.at(-1) - numbers[0] >= 10) {
        return true;
    } else {
        return false;
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compareNumbers(a, b) {
    return a - b;
}
