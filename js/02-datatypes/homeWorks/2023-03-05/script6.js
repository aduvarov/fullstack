'use strict';

// изменить нужно обязательно именно оригинал.
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

let numbers = [1, 2, 3, 1, 4, 6];

numbers.forEach(change);
console.log(numbers);

function change(element, index) {
    element = element ** 2;
    numbers[index] = element;
}
