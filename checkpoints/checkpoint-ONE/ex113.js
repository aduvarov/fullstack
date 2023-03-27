'use strict';

//Дано натуральное число. Определить:
// а) его максимальную цифру;
// б) его минимальную цифру.

let number = 192318053;

function maxAndMinNum(number) {
    let nums = [];
    let min = number.toString()[0];
    let max = 0;
    for (let index = 0; index < number.toString().length; index++) {
        if (number.toString()[min] > number.toString()[index + 1]) {
            min = number.toString()[index + 1];
        }
    }
    for (let index = 0; index < number.toString().length; index++) {
        if (number.toString()[max] < number.toString()[index + 1]) {
            max = number.toString()[index + 1];
        }
    }
    nums.push(min);
    nums.push(max);
    return nums;
}
