'use strict';

// Массив предназначен для хранения значений ростов две-
// надцати человек. С помощью датчика случайных чисел заполнить
// массив целыми значениями, лежащими в диапазоне от 163 до 190
// включительно.

let growth = [];
let rnd;
for (let index = 0; index < 12; index++) {
    rnd = randomInteger(163, 190);
    growth.push(rnd);
}
console.log(growth);
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
