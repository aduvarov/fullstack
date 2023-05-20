'use strict';

// rest - оператор сбора остатка (остаточные параметры)
let array = [1, 2, 3, 4, 5];
const sum = (x, y, ...rem) => {
    let remSum = rem.reduce((acc, elem) => (acc += elem), 0);
    let summa = x + y + remSum;
    return summa;
};
console.log(sum(2, 3, 4, 5, 6, 7, 8, 9, 12));
console.log(sum(...array));
