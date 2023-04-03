'use strict';

//Найти сумму всех целых чисел от a до b (значения a и b вводятся
// с клавиатуры; b ≥ a).

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let summa = 0;
if (b >= a) {
    for (let count = a; count <= b; count++) {
        summa = summa + count;
    }
}
console.log(summa);
