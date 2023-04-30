'use strict';

//Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 100 элементов, с интервалом от 1 до 50
// включительно.
// Написать функцию чтобы найти в этом массиве позицию самой продоложительной последовательности одинаковых чисел.

let a = 1;
let b = 5;
let n = 20;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    let c = 1;
    let arr = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] === numbers[index + 1]) {
            c = c + 1;
            arr.push(c);
        } else {
            arr.push(c);
            c = 1;
        }
    }
    let interval = arr[0];
    let longerInterval = 0;
    for (let index = 0; index < numbers.length; index++) {
        if (interval < arr[index]) {
            interval = arr[index];
            let i = interval - 1;
            longerInterval = index - i + 1;
        }
    }
    return longerInterval;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
