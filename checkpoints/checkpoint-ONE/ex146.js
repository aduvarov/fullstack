'use strict';

//ex146:
// Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 100 элементов, с интервалом от 1 до 100
// включительно. Написать функцию исключающую из этого массива повторяющиеся элементы. Т.е. чтобы в этом массиве были только уникальные числа. Новый массив может быть меньше по размеру.

let a = 1;
let b = 100;
let n = 100;

function interval(a, b, n) {
    let numbers = [];
    let rnd;
    for (let index = 0; index < n; index++) {
        rnd = randomInteger(a, b);
        numbers.push(rnd);
    }
    let result = [];
    for (let uniqueNum of numbers) {
        if (!result.includes(uniqueNum)) {
            result.push(uniqueNum);
        }
    }
    return result;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
