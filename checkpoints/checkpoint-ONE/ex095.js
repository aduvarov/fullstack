'use strict';

//Гражданин 1 марта открыл счет в банке, вложив 1000 руб.
//Через каждый месяц размер вклада увеличивается на 2 % от име-
//ющейся суммы. Определить: сумму вклада через три, шесть и двенадцать месяцев.
//Ответ в видео объекта

let summa = 6000;
let profit = [];
for (let count = 3; count <= 12; count++) {
    count = count + 2;
    summa = summa * 0.02 + summa;
    profit.push(summa);
}

console.log({ summa1: profit[0], summa2: profit[1], summa3: profit[3] });
