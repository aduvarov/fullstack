'use strict';

//Дано натуральное число. Определить, какая цифра встре-
// чается в нем чаще: 0 или 9.

let number = 190099059;

function nineAndZeroNum(number) {
    let num9 = 0;
    let num0 = 0;
    for (let index = 0; index < number.toString().length; index++) {
        if (Number(number.toString()[index]) === 9) {
            num9 = num9 + 1;
        }
    }
    for (let index = 0; index < number.toString().length; index++) {
        if (Number(number.toString()[index]) === 0) {
            num0 = num0 + 1;
        }
    }
    return `9 = ${num9}, 0 = ${num0}`;
}
