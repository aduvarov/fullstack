//Написать программу запрашивающую у пользователя который сейчас час и сколько минут (например 14 35 в двух разных переменных), и показывающее текущее время суток (для 14 35 это день)
//По следующим правилам
//с 5:30 до 12:29 утро
//с 12:30 до 17:29 день
//с 17:30 до 23:29 вечер
//с 23:30 до 5:29 ночь

'use strict';

let hour = +prompt('Который сейчас час');
let minuts = +prompt('Сколько минут');

if (hour == 23 || (hour >= 0 && hour <= 5)) {
    if (hour == 5 && minuts <= 29) {
        document.write('Cейчас ночь');
    } else if (hour === 23 && minuts >= 30 && minuts <= 59) {
        document.write('Cейчас ночь');
    } else if (hour !== 5 && hour !== 23 && minuts <= 59) {
        document.write('Cейчас ночь');
    }
}
if (hour >= 5 && hour <= 12) {
    if (hour == 5 && minuts >= 30 && minuts <= 59) {
        document.write('Cейчас утро');
    } else if (hour === 12 && minuts <= 29) {
        document.write('Cейчас утро');
    } else if (hour !== 5 && hour !== 12 && minuts <= 59) {
        document.write('Cейчас утро');
    }
}
if (hour >= 12 && hour <= 17) {
    if (hour == 12 && minuts >= 30 && minuts <= 59) {
        document.write('Cейчас день');
    } else if (hour == 17 && minuts <= 29) {
        document.write('Cейчас день');
    } else if (hour !== 12 && hour !== 17 && minuts <= 59) {
        document.write('Cейчас день');
    }
}
if (hour >= 17 && hour <= 23) {
    if (hour == 17 && minuts >= 30) {
        document.write('Cейчас вечер');
    } else if (hour == 23 && minuts <= 29) {
        document.write('Cейчас вечер');
    } else if (hour !== 17 && hour !== 23 && minuts <= 59) {
        document.write('Cейчас день');
    }
}
