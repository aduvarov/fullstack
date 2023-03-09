'use strict';

//1). Имеется массив месяцев + такой же для дней недели
// ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август',  'Сентябрь','октябрь','Ноябрь','Декабрь',
// ];

// Необходимо с помощью Date() получить текущую дату и узнать текущий месяц. Вывести текущую дату в таком формате (Март 2033, 7 число, Вторник, 15 часов 37 минут - смещение от UTC 6 часов 30 минут).
let now = new Date();
let year = now.getFullYear();
let month1 = now.getMonth();
let date = now.getDate();
let time = now.getHours() + 6;
let minuts = now.getMinutes() + 30;
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

let day = ['Воскресенье', 'понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

for (let index = 0; index < month.length; index++) {
    if (month1 === index) {
        month1 = month[index];
    }
}
let numberDay = date;
for (let index = 0; index < 31; index++) {
    if (date > 7) {
        date = date - 7;
    }
    if (date === index) {
        date = day[index];
    }
}
console.log(`${month1} ${year}, ${numberDay} число, ${date}, ${time} часов ${minuts} минут`);
