'use strict';

//Дано трехзначное число. Найти:
// а) число единиц в нем;
// б) число десятков в нем;
// в) сумму его цифр;
// г) произведение его цифр.
// Резльутат в виде объекта

let num = 224;

function number(num) {
    let tens = Math.trunc(num / 10);
    let ones = num % 10;
    let sum = Number(num.toString()[0]) + Number(num.toString()[1]) + Number(num.toString()[2]);
    let mult = Number(num.toString()[0]) * Number(num.toString()[1]) * Number(num.toString()[2]);
    return {
        tens: tens,
        ones: ones,
        sum: sum,
        mult: mult,
    };
}
