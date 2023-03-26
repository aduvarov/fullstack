'use strict';

//Найти сумму всех целых чисел от a до b (значения a и b вводятся
// с клавиатуры; b ≥ a).

let a = 3;
let b = 100;
let summa = 0;

for (let count = a; count <= b; count++) {
    summa = summa + count;
}
console.log(summa);
