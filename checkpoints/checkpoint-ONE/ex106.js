'use strict';

//Напечатать минимальное число, большее 190, которое на-
// цело делится на 17.

let num = 190;

function number(num) {
    for (let index = num; index > 0; index++) {
        if (index % 17 === 0) {
            return index;
        }
    }
}
