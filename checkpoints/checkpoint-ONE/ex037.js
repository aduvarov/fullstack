'use strict';

//Дано трехзначное число, в котором все цифры различны.
// Получить шесть чисел, образованных при перестановке цифр заданного числа.
// Результат вернуть в виде объекта.
let num = 324;

function number(num) {
    let num1 = num.toString()[0] + num.toString()[2] + num.toString()[1];
    let num2 = num.toString()[2] + num.toString()[0] + num.toString()[1];
    let num3 = num.toString()[2] + num.toString()[1] + num.toString()[0];
    let num4 = num.toString()[0] + num.toString()[1] + num.toString()[2];
    let num5 = num.toString()[1] + num.toString()[2] + num.toString()[0];
    let num6 = num.toString()[1] + num.toString()[0] + num.toString()[2];
    return { num1: num1, num2: num2, num3: num3, num4: num4, num5: num5, num6: num6 };
}
