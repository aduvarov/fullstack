'use strict';

let colorNum = +prompt('Введите номер цвета радуги от 1 до 7');

switch (colorNum) {
    case 1:
        document.write('Красный');
        break;
    case 2:
        document.write('Оранжевый');
        break;
    case 3:
        document.write('Желтый');
        break;
    case 4:
        document.write('Зеленый');
        break;
    case 5:
        document.write('Голубой');
        break;
    case 6:
        document.write('Синий');
        break;
    case 7:
        document.write('Фиолетовый');
        break;
    default:
        document.write('Всего 7 цветов радуги!');
}
