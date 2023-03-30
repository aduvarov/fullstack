'use strict';

//Дан массив целых чисел. Используя функцию из задания ex136 сгенирировать массив из 25 элементов, с интервалом от 1 до 42
// включительно. Найти позицию наиболее близкого к среднему значению в этом массиве. Если таких позиций будет несколько вернуть их все.
// result array

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
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    let mediumNum = Math.trunc(sum / numbers.length);
    let closeNum = [];
    let num = mediumNum;
    for (let index = 0; index < numbers.length; index++) {
        mediumNum--;
        if (numbers.includes(mediumNum)) {
            closeNum.push(mediumNum);
            break;
        }
    }
    mediumNum = num;
    for (let index = 0; index < numbers.length; index++) {
        mediumNum++;
        if (numbers.includes(mediumNum)) {
            closeNum.push(mediumNum);
            return `${closeNum} `;
        }
    }
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
