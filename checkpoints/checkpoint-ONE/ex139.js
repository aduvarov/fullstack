'use strict';

// //ex139:
// Написать функцию которая принимает (a, b, n), где где a-b интервал от a до b включительно, n - кол-во элементов.
// Функция должна вернуть массив размером n элементов где каждый элемент случайное целое уникальное в этом массиве число из интервала.
// Функция дожна делать проверку на возможность запонения массива. И если это невозможно например a=1 b=3 n=5, то вернуть пустой массив.

let a = 1;
let b = 30;
let n = 2;

function interval(a, b, n) {
    if (n > b - a + 1) {
        return [];
    }
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    let result = [];
    for (let str of numbers) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
