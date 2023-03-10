'use strict';
//Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
// Пример ввода:
// document.write(is_weekend('2023-12-31'));
// Вывод:
// "Выходной"

document.write(is_weekend('2023-03-12'));

function is_weekend(date) {
    let dateObj = new Date();
    let day = dateObj.getDay();
    return day === 6 || day === 0 ? 'Выходной' : 'Иди работай';
}
