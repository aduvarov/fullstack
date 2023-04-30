'use strict';

//Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 25 элементов, с интервалом от 1 до 42
// включительно. Используя метод .forEach() найти сумму всех элеметов массива. Найти среднее арифметическое.
// Результат в виде объекта.

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
    let summa = 0;

    numbers.forEach(element => {
        summa = summa + element;

        return element;
    });
    let nod = summa / n;
    return { summa: summa, nod: nod };
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
