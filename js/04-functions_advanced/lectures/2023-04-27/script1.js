'use strict';

// function f1() {
//     let x = 1;
//     console.log(x++);
//     f1();
// }

// let y = 5;

// f1();
// [

let digits = [1, [[2, [3, [4]]]]];
let sum = sumArr(digits);

function sumArr(array) {
    let summa = 0;
    for (let index = 0; index < array.length; index++) {
        if (!Array.isArray(array[index])) {
            summa = summa + array[index];
        } else {
            summa = summa + sumArr(array[index]);
        }
    }
    return summa;
}

console.log(sum);
