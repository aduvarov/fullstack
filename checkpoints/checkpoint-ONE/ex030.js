'use strict';

// <!-- Написать программу, в которой рассчитывается сумма цифр двузначного числа, вводимого с клавиатуры. -->

let num = +prompt('Введите двузначное число');

function number(num) {
    let sum = Number(num.toString()[0]) + Number(num.toString()[1]);
    return sum;
}
