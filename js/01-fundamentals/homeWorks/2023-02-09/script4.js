'use strict';
//Написать программу запрашивающую у пользователя который сейчас час (например 14),
// и показывающее текущее время суток (для 14 это день)
// По следующим правилам
// с 6 до 12 утро
// с 12 до 18 день
// с 18 до 0 вечер
// с 0 до 6 ночь

let hour = +prompt('Введите который сейчас час');

if (hour >= 0 && hour <= 6) {
    alert('Сейчас ночь!');
} else if (hour >= 6 && hour <= 12) {
    alert('Сейчас утро!');
} else if (hour >= 12 && hour <= 18) {
    alert('Сейчас день!');
} else if (hour >= 18 && hour <= 24) {
    alert('Сейчас вечер!');
} else {
    alert('Вы ввели неправильный час!');
}