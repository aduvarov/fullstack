'use strict';

//Дано натуральное число. Установить, является ли после-
// довательность его цифр при просмотре их слева направо упоря-
// доченной по возрастанию. Например, для числа 1478 ответ по-
// ложительный, для чисел 1782 и 1668 – отрицательный и т. п.

let number = 1234567;

function numAscending(number) {
    for (let index = 0; index < number.toString().length - 1; index++) {
        if (Number(number.toString()[index]) < Number(number.toString()[index + 1])) {
        } else {
            return false;
        }
    }
    return true;
}
