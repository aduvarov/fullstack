'use strict';

//Начав тренировки, лыжник в первый день пробежал
// 10 км. Каждый следующий день он увеличивал пробег на 10 %
// от пробега предыдущего дня. Определить: какой суммарный путь он пробежал за первые 7 дней тре-
// нировок.
// result number

let mileage = 10;
let summa = 10;

for (let count = 1; count <= 7; count++) {
    mileage = mileage * 0.1 + mileage;
    summa = summa + mileage;
}
console.log(summa.toFixed(1));
