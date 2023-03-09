'use strict';
//Написать функцию конвертор минут в часы и минуты. Например при получении числа 366. Функция должна возвращать строку '6 час. 6 мин.')

let time = +prompt('Введите время');
let result = hourAndMinuts(time);
console.log(result);

function hourAndMinuts(time) {
    let minuts = 0;
    let hour = 0;
    while (time > 0) {
        if (time > 60) {
            hour = hour + 1;
            time = time - 60;
        } else if (time < 60) {
            minuts = time;
            time = time - time;
        }
    }
    hour = '' + hour;
    minuts = '' + minuts;
    let result = hour + ' час.' + minuts + ' мин.';
    return result;
}
