'use strict';

//Дано натуральное число. Найти число: получаемое в результате удаления из него всех цифр а;

let number = 192318053;
let figure = 8;

function removeNum(number, figure) {
    let nums = [];
    for (let index = 0; index < number.toString().length; index++) {
        if (Number(number.toString()[index]) !== figure) {
            nums.push(number.toString()[index]);
        }
    }
    nums = Number(nums.join(''));
    return nums;
}
