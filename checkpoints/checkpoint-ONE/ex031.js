'use strict';

//Дано двузначное число. Получить число, образованное при перестановке цифр заданного числа. Например 69 -> 96

let num = 24;

function number(num) {
    let sum = num.toString()[1] + num.toString()[0];
    return sum;
}
