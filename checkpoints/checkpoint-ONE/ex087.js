'use strict';

//Напечатать таблицу перевода расстояний в дюймах в сан-
// тиметры для значений 10, 11, ..., 22 дюйма (1 дюйм = 25,4 мм).

let inch = 9;
let mm = 228.6;
let centimeter = 0;
document.write('<table border="1">');
for (let row = 0; row < 13; row++) {
    // document.write('<tr>');
    // //
    for (let col = 0; col < 1; col++) {
        inch = inch + 1;
        document.write(`<td> ${inch} фунт </td>`);
    }
    for (let col1 = 0; col1 < 1; col1++) {
        mm = mm + 25.4;
        centimeter = mm / 10;
        document.write(`<td> ${centimeter.toFixed(1)}см </td>`);
    }
    document.write('</tr>');
}
document.write('</table>');
