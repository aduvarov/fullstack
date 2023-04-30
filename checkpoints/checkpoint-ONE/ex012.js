'use strict';

//Написать функцию принимающую (катет1, катет2) прямоугольного треугольника и возвращющую гипотенузу.

let c1 = 6;
let c2 = 8;

function pythagorasTheorem(c1, c2) {
    let hypo = Math.sqrt(c1 ** 2 + c2 ** 2);
    return hypo;
}
