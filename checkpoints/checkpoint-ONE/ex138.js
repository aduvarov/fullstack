'use strict';

//Используя функцию из задания ex136 создать массив размером 100 элементов, с интервалом от 1 до 42 включительно.
// Вернуть отсортированный по математическому возрастанию массив. Необходимо использовать метод .sort()

let a = 1;
let b = 42;
let n = 100;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    return numbers.sort(compareNumbers);
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compareNumbers(a, b) {
    return a - b;
}
