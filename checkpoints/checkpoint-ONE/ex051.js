'use strict';

//ex051:
// Дано двузначное число. Определить:
// а) какая из его цифр больше: первая или вторая;
// б) одинаковы ли его цифры.
let m = 24;

function numEven(m) {
    let num1 = Number(m.toString()[0]);
    let num2 = Number(m.toString()[1]);
    if (num1 > num2) {
        return `${num1} > ${num2} `;
    } else if (num1 === num2) {
        return `${num1} = ${num2} `;
    } else {
        return `${num1} < ${num2} `;
    }
}
