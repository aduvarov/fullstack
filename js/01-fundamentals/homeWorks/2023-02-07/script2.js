// 2). Составьте программу , которая по введённому номеру цвета в радуге (1-7) выводит на экран название соответствующего цвета (1- красный, 2- оранжевый,...) если введено любое другое число , то программа должна выводить сообщение об ошибке .

'use strict';

let num1 = 'Красный';
let num2 = 'Оранжевый';
let num3 = 'Желтый';
let num4 = 'Зеленый';
let num5 = 'Голубой';
let num6 = 'Синий';
let num7 = 'Фиолетовый';

let colorNum = +prompt('Введите номер цвета радуги от 1 до 7');

if (colorNum === 1) {
    alert(num1);
} else if (colorNum === 2) {
    alert(num2);
} else if (colorNum === 3) {
    alert(num3);
} else if (colorNum === 4) {
    alert(num4);
} else if (colorNum === 5) {
    alert(num5);
} else if (colorNum === 6) {
    alert(num6);
} else if (colorNum === 7) {
    alert(num7);
} else {
    alert('Ввели неправильный номер цвета');
}
