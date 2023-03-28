'use strict';

//Дано число n, оперделить является ли оно степенью числа 3.

let n = 205;

function nDegreeThree(n) {
    for (let index = 0; index < n; index++) {
        if (n !== 1 && n !== 3) {
            n = n / 3;
        }
        if (n / 3 === 1 || n === 3) {
            return true;
        }
    }
    return false;
}
