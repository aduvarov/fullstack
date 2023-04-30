'use strict';
//Дано трехзначное число. Найти число, полученное при перестановке второй и третьей цифр заданного числа.

let num = 324;

function number(num) {
    let sum = num.toString()[0] + num.toString()[2] + num.toString()[1];
    return Number(sum);
}
