'use strict';

//Найти сумму 2во2 + 2в3 + 2в4 + … + 2в10 . Операцию возведения
// в степень не использовать.

let num = 0;
let summa = 0;

for (let index = 2; index <= 10; index++) {
    num = Math.pow(2, index);
    summa = summa + num;
}
console.log(summa);
