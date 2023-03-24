'use strict';

//Определить, является ли заданное шестизначное число счастливым. (Счастливым называют такое шестизначное число, в котором сумма его первых трех цифр равна сумме его последних трех цифр.)
let num = 423231;

function luckyNumber(num) {
    let num1 = Number(num.toString()[0]);
    let num2 = Number(num.toString()[1]);
    let num3 = Number(num.toString()[2]);
    let num4 = Number(num.toString()[3]);
    let num5 = Number(num.toString()[4]);
    let num6 = Number(num.toString()[5]);
    if (num1 + num2 + num3 === num4 + num5 + num6) {
        return 'Счастливое число';
    }
}
