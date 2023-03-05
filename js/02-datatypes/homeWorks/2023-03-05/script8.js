'use strict';

// Дан массив с числами. Оставьте в нем только четные числа.

let numbers = [1, 2, -3, 4, -5, 6, -7];

let number = numbers.filter(modify);
console.log(number);

function modify(element) {
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
