'use strict';

// Найти все целые числа из промежутка от 1 до 300, у ко-
// торых ровно пять делителей.
// result: array

let num = [];

let counter = 0;

for (let index = 1; index <= 300; index++) {
    counter = 0;
    for (let count = 1; count <= index; count++) {
        if (index % count === 0) {
            counter++;
        }
    }
    if (counter === 5) {
        num.push(index);
        counter = 0;
    }
}
console.log(num);
