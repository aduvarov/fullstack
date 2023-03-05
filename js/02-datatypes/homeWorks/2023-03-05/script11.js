'use strict';

//С генерировать массив температур в градусах цельсия от -40 до + 40 с шагом 1.
// С помощью функции map создать новый массив с градусами фаренгейта относитеьно первого массива.
// Результат вывести с помощью document.write в виде таблицы с шапкой.

let temp = [];

for (let count = -40; count <= 40; count++) {
    temp.push(count);
}

let tempForen = temp.map(modify);

document.write('<table border=1>');
document.write('Переведенные значения градусов цельсия в форенгейта');
document.write('<tr>');
for (let index = 1; index <= 20; index++) {
    document.write('<td>' + tempForen[index] + '</td>');
}
document.write('<tr>');
for (let index = 21; index <= 40; index++) {
    document.write('<td>' + tempForen[index] + '</td>');
}
document.write('<tr>');
for (let index = 41; index <= 60; index++) {
    document.write('<td>' + tempForen[index] + '</td>');
}
document.write('<tr>');
for (let index = 61; index <= 80; index++) {
    document.write('<td>' + tempForen[index] + '</td>');
}

document.write('</table>');

function modify(element) {
    element = (element * 9) / 5 + 32;
    return element.toFixed(1);
}
