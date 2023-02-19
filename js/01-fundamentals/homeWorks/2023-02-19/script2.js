//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
'use strict';

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');

let result = math(num1, num2, num3);
document.write(result);

function math(num1, num2, num3) {
    let result = (num1 - num2) / num3;
    return result;
}
