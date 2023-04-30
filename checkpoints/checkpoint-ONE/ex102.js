'use strict';

//Определить натуральные чисела из интервала
// от 100 до 500, сумма цифр которых равна 15.
// result array

let num = [];

for (let index = 100; index < 500; index++) {
    if (Number(index.toString()[1]) + Number(index.toString()[0]) + Number(index.toString()[2]) === 15) {
        num.push(index);
    }
}
console.log(num);
