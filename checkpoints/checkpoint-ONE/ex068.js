'use strict';

//Поле шахматной доски определяется парой натуральных
// чисел, каждое из которых не превосходит 8: первое число – номер
// вертикали (при счете слева направо), второе – номер горизонтали
// (при счете снизу вверх). Даны натуральные числа a, b, c, d, каждое
// из которых не превосходит 8.
// На поле (a, b) расположен король. Определить, может ли он
// одним ходом попасть на поле (c, d).
// Результат boolean

let a = 5;
let b = 7;
let c = 6;
let d = 4;

if (c - a === 1 || d - b === 1) {
    console.log(true);
} else {
    console.log(false);
}
