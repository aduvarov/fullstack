'use strict';

let number1;
let number2;

number1 = +prompt('Введите первое число');
number2 = +prompt('Введите второе число');
let sum = number1 * number2;
let total = +prompt('Результат умножения первого числа на второе. ');

if (total === sum) {
    alert('Ответ верный');
} else {
    alert('Ответ неверный, ' + 'верный ответ ' + sum);
}
