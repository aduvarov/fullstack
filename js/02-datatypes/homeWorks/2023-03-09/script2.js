'use strict';

//Получить текущую дату узнать сколько осталось дней до 1 января 2024 года.

let nextYear = new Date('2024-01-01').getTime();
let now = new Date().getTime();
let days = Math.trunc((nextYear - now) / 1000 / 60 / 60 / 24);
console.log(days + ' дней до следующего года');
