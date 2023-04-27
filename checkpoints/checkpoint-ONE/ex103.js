'use strict';

// Дано натуральное число.
// Получить все его делители.
// result array

let num = 14;
let numbers = [];

for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
        numbers.push(index);
    }
}
console.log(numbers);
