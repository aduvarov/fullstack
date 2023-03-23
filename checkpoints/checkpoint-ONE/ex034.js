'use strict';
// Дано трёхзначное число. Перенести в нём первую цифру в конец. Например 324 -> 243

let num = 324;

function number(num) {
    let sum = num.toString()[2] + num.toString()[1] + num.toString()[0];
    return Number(sum);
}
