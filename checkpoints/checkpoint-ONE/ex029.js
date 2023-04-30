'use strict';

// Дано двузначное число. Найти:
// а) число десятков в нем;
// б) число единиц в нем.
// Результат вернуть в виде объекта.
let num = 24;

function number(num) {
    let tens = Math.trunc(num / 10);
    let ones = num % 10;
    return {
        tens: tens,
        ones: ones,
    };
}
