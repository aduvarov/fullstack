'use strict';

let num = 0;
let product = 0;

document.write('<table border="1">');
for (let row = 0; row < 20; row++) {
    // document.write('<tr>');
    // //
    for (let col = 0; col < 1; col++) {
        num = num + 1;
        document.write(`<td> ${num} </td>`);
    }
    for (let col1 = 0; col1 < 1; col1++) {
        product = product + 20.4;
        document.write(`<td> ${product.toFixed(1)} </td>`);
    }
    document.write('</tr>');
}
document.write('</table>');
