'use strict';

//Даны три вещественных числа a, b, c. Проверить:
// а) выполняется ли неравенство a < b < c;
// б) выполняется ли неравенство b > a > c.
// Результат в виде объекта
// { 'a < b < c': true, 'b > a > c': false }

let a = 6;
let b = 7;
let c = 8;

function inequality(a, b, c) {
    if (a < b && b < c) {
        return { 'a < b < c': true, 'b > a > c': false };
    } else if (b > a && a > c) {
        return { 'a < b < c': false, 'b > a > c': true };
    } else {
        return { 'a < b < c': false, 'b > a > c': false };
    }
}
