'use strict';

//Принять x и y. Найти их сумму, разность, произведение,
// а также частное от деления первого числа на второе. Результат вернуть в виде объекта.

let x = 6;
let y = 4;

function MathCal(x, y) {
    let sum = x + y;
    let diff = x - y;
    let mult = x * y;
    let div = x / y;
    return { sum: sum, diff: diff, mult: mult, div: div };
}
