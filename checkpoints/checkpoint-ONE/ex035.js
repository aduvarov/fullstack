'use strict';

//Дано трёхзначное число. Перенести в нём последнюю цифру в начало. Например 324 -> 432
let num = 324;

function number(num) {
    let sum = num.toString()[2] + num.toString()[0] + num.toString()[1];
    return Number(sum);
}
