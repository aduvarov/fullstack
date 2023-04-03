'use strict';

//Найти среднее арифметическое всех целых чисел от 1 до 750;

let a = 1;
let b = 3;
let medium = 0;
let summa = 0;
let num = 0;

for (let count = a; count <= b; count++) {
    num = num + 1;
    summa = summa + count;
}
medium = Math.trunc(summa / num);
console.log(medium);
