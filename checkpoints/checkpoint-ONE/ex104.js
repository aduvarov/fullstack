'use strict';

//Натуральное число называется совершенным, если оно
// равно сумме своих делителей, включая 1 и, естественно, исключая
// это самое число. Например, число 6 – совершенное (6 = 1 + 2 + 3).
// Дано натуральное число. Выяснить, является ли оно совершен-
// ным.
// result boolean

let num = 14;

function perfectNumber(num) {
    let summa = 0;
    for (let index = 1; index < num; index++) {
        if (num % index === 0) {
            summa = summa + index;
        }
    }
    if (summa === num) {
        return true;
    } else {
        return false;
    }
}
