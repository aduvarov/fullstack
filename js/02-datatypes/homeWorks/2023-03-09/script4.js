'use strict';
// Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
// Пример ввода:
// document.write(compare_dates(new Date('11/14/2021 00:01'), new Date('12/14/2021 00:00')));
// Вывод:
// "Date1 > Date2"

let date1 = new Date('11/14/2021 00:01');
let date2 = new Date('11/14/2021 00:01');

if (date1 > date2) {
    document.write('date1 > date2');
} else if (date1 < date2) {
    document.write('date1 < date2');
} else if (date1 === date2) {
    document.write('date1 === date2');
}
