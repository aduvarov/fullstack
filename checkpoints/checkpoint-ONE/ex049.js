'use strict';

//Дано натуральное число. Определить:
//а) является ли оно четным;
//б) оканчивается ли оно цифрой 7.

let m = 27;

function numEven(m) {
    let num7 = Number(m.toString().at(-1));
    if (num7 === 7) {
        console.log(`Число ${m} оканчивается ли оно цифрой 7 true`);
    } else {
        console.log(`Число ${m} оканчивается ли оно цифрой 7 false`);
    }
    if (m % 2 === 0) {
        console.log(`Число ${m} чётное `);
    } else {
        console.log(`Число ${m} нечётное `);
    }
}
