'use strict';

//Дано натуральное число. Определить:
// а) его максимальную цифру;
// б) его минимальную цифру.

let number = 319;

function maxAndMinNum(number) {
    let nums = [];
    let min = number.toString()[0];
    let max = number.toString()[0];
    for (let index = 0; index < number.toString().length; index++) {
        if (min > number.toString()[index]) {
            min = number.toString()[index];
        }
    }
    for (let index = 0; index < number.toString().length; index++) {
        if (max < number.toString()[index]) {
            max = number.toString()[index];
        }
    }
    nums.push(min);
    nums.push(max);
    return nums;
}
