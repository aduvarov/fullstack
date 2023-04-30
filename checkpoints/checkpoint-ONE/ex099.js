'use strict';

// Дано семизначное число. Найти число, получаемое при
// прочтении его цифр справа налево. Метод reverse() не использовать.

let num = 5922321;

function getReversedNum(num) {
    let result = 0;
    while (num) {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return result;
}
