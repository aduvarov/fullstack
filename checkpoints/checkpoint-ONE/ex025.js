'use strict';

//Дана таблица из 10 строк и 5 столбцов. Определить:
// в какой строке находится значение с порядковым номером n, если нумерацию вести с 1 до 50 построчно сверху вниз, а в каждой
// строке – слева направо;

let n = 45;
// let num = 0;
// document.write('<table border="1">');
// for (let row = 0; row < 10; row++) {
//     document.write('<tr>');
//     for (let col = 0; col < 5; col++) {
//         num = num + 1;
//         document.write(`<td> ${num} </td>`);
//     }
//     document.write('</tr>');
// }
// document.write('</table>');

function strTable(n) {
    let str = 1;
    for (let count = 0; count < n; count++) {
        if (n - 5 > 0) {
            n = n - 5;
            str = str + 1;
        }
    }
    return str;
}
