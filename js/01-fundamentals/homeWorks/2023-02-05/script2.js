'use strict';

let number1;
let number2;

number1 = +prompt('Введите первое число');
number2 = +prompt('Введите второе число');
let total = number1 % number2;

if (number1 % number2) {
    alert('Число не кратно,остаток от деления ' + total);
} else {
    alert('Число кратно,остатка нет');
}
