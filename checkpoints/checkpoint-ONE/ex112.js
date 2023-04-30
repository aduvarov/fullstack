'use strict';

//Дано натуральное число. Определить номер цифры 8
// в нем, считая от конца числа. Если такой цифры нет, ответом
// должно быть число 0, если таких цифр в числе несколько – дол-
// жен быть определен номер самой левой из них.

let number = 1231805;

function searchNumber(number) {
    for (let index = 0; index <= number.toString().length; index++) {
        if (number.toString()[index] === '8') {
            return number.toString().length - index;
        }
    }
    return 0;
}
