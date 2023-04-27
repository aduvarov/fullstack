'use strict';

let a = 122;
let b = 334;
let c = 453;

function sumOfLargeNnum(a, b, c) {
    let summa = 0;
    if (a > b) {
        if (b > c) {
            summa = a + b;
            return summa;
        } else {
            summa = a + c;
            return summa;
        }
    } else if (b > c || b > a) {
        if (a > c) {
            summa = b + a;
            return summa;
        } else {
            summa = b + c;
            return summa;
        }
    }
}
