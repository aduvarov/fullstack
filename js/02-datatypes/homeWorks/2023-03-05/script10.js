'use strict';

//Дан массив из месяцев на 12 элементов ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','октябрь','Ноябрь','Декабрь' ];
// создать с помощью map новый массив состоящий из 12 элементов длин строк каждого месяца.
// [  6, 7, 4, 6, 3, 4, 4, 6, 8, 7, 6, 7]

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

let stringLength = str.map(modify);
console.log(stringLength);

function modify(element) {
    element = element.length;
    return element;
}
