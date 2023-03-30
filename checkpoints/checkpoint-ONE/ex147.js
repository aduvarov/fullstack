'use strict';

//Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 100 элементов, с интервалом от 1 до 50
// включительно.
// Написать функцию чтобы найти в этом массиве позицию самой продоложительной последовательности одинаковых чисел.

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
    for (let index = 0; index < 100; index++) {
        if (numbers[index] === numbers[index + 1]) {
            c = c + 1;
        } else {
            arr.push(c);
            c = 1;
        }
    }
    let longerInterval = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < arr[index + 1]) {
            longerInterval = arr[index + 1];
        }
    }
    return longerInterval;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compareNumbers(a, b) {
    return a - b;
}
