'use strict';

// Найти все целые числа из промежутка от 1 до 300, у ко-
// торых ровно пять делителей.
// result: array

let num = [];

let counter = 0;

for (let index = 200; index <= 500; index++) {
    counter = 0;
    for (let count = 1; count <= index; count++) {
        if (index % count === 0) {
            counter++;
        }
    }
    if (counter === 6) {
        num.push(index);
        counter = 0;
    }
}
console.log(num);
