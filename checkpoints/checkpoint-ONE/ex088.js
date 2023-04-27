'use strict';

//Напечатать таблицу умножения на 7:
// 1 х 7 = 7
// 2 х 7 = 14
// ...
// 9 х 7 = 63

let num = 0;
let count = 0;

document.write('<table border="1">');
for (let row = 0; row < 10; row++) {
    num = num + 7;
    count = count + 1;
    document.write(`<td> ${count} x 7 = ${num}</td>`);
    document.write('</tr>');
}
document.write('</table>');
