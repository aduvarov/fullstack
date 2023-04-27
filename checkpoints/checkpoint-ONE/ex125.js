'use strict';

//Найти все трехзначные простые числа (простым называ-
// ется натуральное число, большее 1, не имеющее других делите-
// лей, кроме единицы и самого себя).
// result: array

let num = [];

let counter = 0;

for (let index = 100; index <= 999; index++) {
    counter = 0;
    for (let count = 1; count <= index; count++) {
        if (index % count === 0) {
            counter++;
        }
    }
    if (counter === 2) {
        num.push(index);
    }
}
console.log(num);
