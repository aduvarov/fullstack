'use strict';
// Подсчитать сумму всех чисел от 1 до 100 с помощью циклов

let start = 1;
let end = 100;
let sum = 0;

while (start <= end) {
    sum = sum + start;
    start = start + 1;
}

document.write('Сумма всех чисел от 1 до 100 будет: ' + sum);
