'use strict';

// По данным числам n и m заполните двумерный массив размером n×m числами от 1 до n×m “змейкой”, как показано в примере. Выведите полученный массив, отводя на вывод каждого элемента ровно 4 символа.

// заполните двумерный массив 10 на 10 числами от 0 до 99 змейкой.
// [
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
// [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
// и т.д. до 99
// ]
let table = [];
let num = 0;
let forward = true;
let delta = 9;

// for (let row = 0; row < 10; row++) {
//     table.push([]);
//     for (let col = 0; col < 10; col++) {
//         table[row].push(num);
//         if (forward) {
//             ++num;
//         } else {
//             num--;
//         }
//     }
//     num += delta;
//     if (forward) {
//         forward = false;
//         delta = 11;
//     } else {
//         forward = true;
//         delta = 9;
//     }
// }

for (let row = 0; row < 10; row++) {
    table.push([]);
    for (let col = 0; col < 10; col++) {
        table[row].push(num);
        num++;
    }
}

table.forEach((element, index) => (index % 2 !== 0 ? table[index].reverse() : null));

console.log(table);
