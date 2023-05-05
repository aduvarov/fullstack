'use strict';

let n = 0;

function sumToСycle(n) {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum += index;
    }
    return sum;
}

function sumToRecursion(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumToRecursion(n - 1);
}
