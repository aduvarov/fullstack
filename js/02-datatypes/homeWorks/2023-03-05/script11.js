'use strict';

//С генерировать массив температур в градусах цельсия от -40 до + 40 с шагом 1.
// С помощью функции map создать новый массив с градусами фаренгейта относитеьно первого массива.
// Результат вывести с помощью document.write в виде таблицы с шапкой.

let temp = [];

for (let count = -40; count <= 40; count++) {
    temp.push(count);
}
let index2 = 0;
let tempForen = temp.map(modify);
document.write('<h1>Переведнные значения градусов Цельсия в градусы Форенгенйта</h1>');
document.write('<table border=1>');

document.write('<td>Градусы Цельсия</td>');
document.write('<td>Градусы Форенгейта</td>');
for (let index = -40; index <= 40; index++) {
    document.write('<tr><td>' + index + '</td>' + '<td>' + tempForen[index2] + '</td></tr>');
    index2 = index2 + 1;
}
document.write('</table>');

function modify(element) {
    element = (element * 9) / 5 + 32;
    return element.toFixed(1);
}
