'use strict';
// filter()
// Дан массив с числами. Оставьте в нем только отрицательные числа.

let numbers = [1, 2, -3, 4, -5, 6, -7];

let number = numbers.filter(modify);
console.log(number);

function modify(element) {
    if (element < 0) {
        return true;
    } else {
        return false;
    }
}
