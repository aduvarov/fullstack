'use strict';

//Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 25 элементов, с интервалом от 1 до 42 включительно. Все чётные элементы, оканчивающиеся цифрой 4, уменьшить вдвое. Необходимо использовать метод .map()

let a = 1;
let b = 42;
let n = 25;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    let newArray = numbers.map(element => {
        if (element.toString().at(-1) === '4') {
            element = element / 2;
        }
        return element;
    });
    return newArray;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
