'use strict';

//Поле шахматной доски определяется парой натуральных
// чисел, каждое из которых не превосходит 8: первое число – номер
// вертикали (при счете слева направо), второе – номер горизонтали
// (при счете снизу вверх). Даны натуральные числа a, b, c, d, каждое
// из которых не превосходит 8.
// На поле (a, b) расположен ферзь. Определить, угрожает ли
// он полю (c, d).
// Результат boolean

let a = 5;
let b = 8;
let c = 6;
let d = 4;

if (a <= 8 && b <= 8 && c <= 8 && d <= 8) {
    if (c === a || d === b) {
        console.log(true);
    } else if (Math.abs(c - a) === Math.abs(d - b)) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('координаты не больше 8');
}
