// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
'use strict';

let numbers = [1, 2, 3, 1, 4, 6];

let number = numbers.every(change);
console.log(number);

function change(element) {
    if (element > 0) {
        return true;
    } else {
        return false;
    }
}
