'use strict';

let num1 = +prompt('Введите день от 1 до 7');

if (num1 > 7 || num1 < 1) {
    document.write('Ввели неправильное значение');
}

switch (num1) {
    case 1:
    case 3:
    case 5:
        document.write('онлайн обучение');
        break;
    case 2:
    case 4:
    case 6:
        document.write('домашняя работа');
        break;
    case 7:
        document.write('выходной');
        break;
}
