'use strict';

//Дано натуральное число n (1 ≤ n ≤ 9999), определяющее
// стоимость товара в копейках. Выразить стоимость в рублях и ко-
// пейках, например 3 рубля 21 копейка, 15 рублей 5 копеек, 1 рубль
// ровно и т. п.

let n = 1230;

function moneyTransfer(n) {
    let rub = 0;
    let kopeyki = 0;
    let rubName;
    let kopName;
    if (1 <= n && n <= 9999) {
        rub = Math.trunc(n / 100);
        kopeyki = n % 100;
        if (rub % 10 == 1 && rub % 100 !== 11 && rub != 11) {
            rubName = 'рубль';
            if (kopeyki === 0) {
                return `${rub} ${rubName} ровно `;
            }
        } else if (rub % 100 >= 12 && rub % 100 <= 14) {
            rubName = 'рублей';
            if (kopeyki === 0) {
                return `${rub} ${rubName} ровно `;
            }
        } else if (rub % 10 == 2 || rub % 10 == 3 || rub % 10 == 4) {
            rubName = 'рубля';
            if (kopeyki === 0) {
                return `${rub} ${rubName} ровно `;
            }
        } else {
            rubName = 'рублей';
            if (kopeyki === 0) {
                return `${rub} ${rubName} ровно `;
            }
        }
        if (kopeyki % 10 == 1 && kopeyki % 100 !== 11 && kopeyki != 11) {
            kopName = 'копейка';
        } else if (kopeyki % 100 >= 12 && kopeyki % 100 <= 14) {
            kopName = 'копеек';
        } else if (kopeyki % 10 == 2 || kopeyki % 10 == 3 || kopeyki % 10 == 4) {
            kopName = 'копейки';
        } else {
            kopName = 'копеек';
        }
    }
    return `${rub} ${rubName} ${kopeyki} ${kopName}`;
}
