'use strict';

//Найти наибольший общий делитель двух заданных натуральных чисел, используя алгоритм Евклида.

let a = 53;
let b = 13;

function nod(a, b) {
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return console.log(a + b);
}
