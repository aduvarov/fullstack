'use strict';

//Напечатать таблицу соответствия между массой в фунтах
// и массой в килограммах для значений 1, 2, ..., 10 фунтов (1 фунт =
//     453 г)

let num = 0;
let product = 0;

document.write('<table border="1">');
for (let row = 0; row < 10; row++) {
    // document.write('<tr>');
    // //
    for (let col = 0; col < 1; col++) {
        num = num + 1;
        document.write(`<td> ${num} фунт </td>`);
    }
    for (let col1 = 0; col1 < 1; col1++) {
        product = product + 453;
        document.write(`<td> ${product}г </td>`);
    }
    document.write('</tr>');
}
document.write('</table>');
