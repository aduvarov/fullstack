'use strict';

let str = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'октябрь',
    'Ноябрь',
    'Декабрь',
];

let strFiveSymvol = str.filter(modify);
console.log(strFiveSymvol);

function modify(element) {
    if (element.length >= 5) {
        return true;
    } else {
        return false;
    }
}
