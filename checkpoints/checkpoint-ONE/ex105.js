'use strict';

//Даны натуральные числа a и b (a > b). Определить: а)результат целочисленного деления a на b, не используя стандартную
// операцию целочисленного деления; б)остаток от деления a на b, не используя стандартную операцию вычисления остатка.
// result object // myDiv(6, 4) // { result: 1, remainder: 2}

let num1 = 6;
let num2 = 3;
function myDiv(num1, num2) {
    let count = 0;
    let remainder = 0;
    while (num1 >= num2) {
        num1 = num1 - num2;
        if (num1 >= 0) {
            count++;
        }
        remainder = num1;
    }
    return { result: count, remainder: remainder };
}
