'use strict';
//Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
// Пример ввода:
// document.write(is_weekend('2023-12-31'));
// Вывод:
// "Выходной"
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let result = freeDay(day);
console.log(result);
function freeDay(day) {
    for (let index = 0; index < 31; index++) {
        if (day > 7) {
            day = day - 7;
        }
        if (day === 6 || day === 7) {
            return console.log('Выходной');
        }
    }
    return console.log('Не выходной');
}
