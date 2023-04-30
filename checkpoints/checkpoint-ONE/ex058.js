'use strict';

//Даны три вещественных числа a, b, c. Определить, имеется ли среди них хотя бы одна пара равных между собой чисел.
// Результат boolean

let a = 62;
let b = 72;
let c = 62;

function equalsNum(a, b, c) {
    if (a === b || a === c || b === c) {
        return true;
    } else {
        return false;
    }
}
