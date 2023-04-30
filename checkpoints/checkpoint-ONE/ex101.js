'use strict';

// Найти все двузначные числа, которые делятся на n или
// содержат цифру n.
// result array

let n = 9;
let num = [];

for (let index = 10; index <= 99; index++) {
    if (index.toString().includes(n)) {
        num.push(index);
    } else if (index % n === 0) {
        num.push(index);
    }
}
console.log(num);
