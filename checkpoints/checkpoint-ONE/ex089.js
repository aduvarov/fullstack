'use strict';

//Напечатать таблицу умножения на 9:
// 9 х 1 = 9
// 9 х 2 = 18
// ...
// 9 х 9 = 81

let num = 0;
let count = 0;

document.write('<table border="1">');
for (let row = 0; row < 10; row++) {
    num = num + 9;
    count = count + 1;
    document.write(`<td> ${count} x 9 = ${num}</td>`);
    document.write('</tr>');
}
document.write('</table>');
