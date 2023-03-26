'use strict';

//Напечатать таблицу соответствия между массой в фунтах
// и массой в килограммах для значений 1, 2, ..., 10 фунтов (1 фунт =
//     453 г)

let pound = 0;
let gramm = 0;

document.write('<table border="1">');
for (let row = 0; row < 10; row++) {
    // document.write('<tr>');
    // //
    for (let col = 0; col < 1; col++) {
        pound = pound + 1;
        document.write(`<td> ${pound} фунт </td>`);
    }
    for (let col1 = 0; col1 < 1; col1++) {
        gramm = gramm + 453;
        document.write(`<td> ${gramm}г </td>`);
    }
    document.write('</tr>');
}
document.write('</table>');
