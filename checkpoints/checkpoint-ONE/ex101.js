'use strict';

// Найти все двузначные числа, которые делятся на n или
// содержат цифру n.
// result array

let n = 5;
let num = [];

for (let index = 10; index < 99; index++) {
    if (index.toString().includes(5)) {
        num.push(index);
    } else if (index % 5 === 0) {
        num.push(index);
    }
}
console.log(num);
