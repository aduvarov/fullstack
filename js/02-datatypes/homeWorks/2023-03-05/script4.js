'use strict';
//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let numbers = [1, 2, 3, 4, 5, 6, 7];

let number = numbers.some(modify);
console.log(number);

function modify(element) {
    if (element < 0) {
        return true;
    } else {
        return false;
    }
}
