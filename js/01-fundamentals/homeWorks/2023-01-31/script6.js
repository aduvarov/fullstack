'use strict';

alert('Программа вычисляющая из диаметра шара площадь');

let sphereDiameter = Number(prompt('Диаметр шара'));
let PI = 3.14;

let radius = sphereDiameter / 2;
let S = 4 * PI * (radius * radius);
alert('Площадь равна ' + S);
