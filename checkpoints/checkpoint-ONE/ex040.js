'use strict';

//Даны два различных вещественных числа. Определить:
// а) какое из них больше;
// б) какое из них меньше.
// Результат в виде массива отсортированного по возврастанию

let num = 3224;
let num2 = 233;

function number(num, num2) {
    if (num > num2) {
        return { num2: num2, num: num };
    } else {
        return { num: num, num2: num2 };
    }
}
