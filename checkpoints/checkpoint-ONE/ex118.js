'use strict';

//Дано число n, оперделить является ли оно степенью числа 3.

let n = 205;

function nDegreeThree(n) {
    while (n >= 1) {
        n = n / 3;
        if (n / 3 === 1) {
            return true;
        } else if (n % 3 !== 0) {
            return false;
        }
    }
}
