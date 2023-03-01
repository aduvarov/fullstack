'use strict';

//Запросить у пользователя размер массива arrSize > 0.
// Сформировать и вывести целочисленный
// массив размера arrSize, содержащий степени двойки от первой до arrSize -ной: 2, 4,
// 8, 16, . . . .
// Например при вводе 5, результатирующий массив должен быть таким:
// [ 2, 4, 8, 16, 32 ]

let arrSize = [+prompt('Введите степень двойки')];
let degreeТwo = [2];

let result = [2];

for (let count = 1; count < arrSize[0]; count++) {
    degreeТwo = degreeТwo * 2;
    result.push(degreeТwo);
}
console.log(result);
