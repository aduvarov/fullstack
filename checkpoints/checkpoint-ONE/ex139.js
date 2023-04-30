'use strict';

// //ex139:
// Написать функцию которая принимает (a, b, n), где где a-b интервал от a до b включительно, n - кол-во элементов.
// Функция должна вернуть массив размером n элементов где каждый элемент случайное целое уникальное в этом массиве число из интервала.
// Функция дожна делать проверку на возможность запонения массива. И если это невозможно например a=1 b=3 n=5, то вернуть пустой массив.

let a = 1;
let b = 100;
let n = 50;

function interval(a, b, n) {
    if (n > b) {
        return [];
    }
    let rnd;
    let result = [];
    for (let index = 0; result.length < n; index++) {
        rnd = randomInteger(a, b);
        if (!result.includes(rnd)) {
            result.push(rnd);
        }
    }
    return result;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
