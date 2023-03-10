'use strict';

//1). Имеется массив месяцев + такой же для дней недели
// ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август',  'Сентябрь','октябрь','Ноябрь','Декабрь',
// ];

// Необходимо с помощью Date() получить текущую дату и узнать текущий месяц. Вывести текущую дату в таком формате (Март 2033, 7 число, Вторник, 15 часов 37 минут - смещение от UTC + 3 часов 0 минут).
let now = new Date();
let year = now.getFullYear();
let currentMonth = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
let minuts = now.getMinutes();
let offset = now.getTimezoneOffset();
let sign = offset <= 0 ? '+' : '-';
let hOffset = Math.trunc(Math.abs(offset) / 60);
let mOffset = offset % 60;

let month = [
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

let days = ['Воскресенье ', 'понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let numberDay = now.getDay(); //9 /2

console.log(
    `${month[currentMonth]} ${year},${date} число,${days[numberDay]}, ${hours} часов ${minuts} минут  - смещение от UTC ${sign} ${hOffset} час. ${mOffset} мин.`
);
