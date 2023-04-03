'use strict';

//Дано натуральное число n (1 ≤ n ≤ 9999), определяющее
// стоимость товара в копейках. Выразить стоимость в рублях и ко-
// пейках, например 3 рубля 21 копейка, 15 рублей 5 копеек, 1 рубль
// ровно и т. п.

let n = 1230;

function moneyTransfer(n) {
    let rub = 0;
    let kopeyki = 0;
    if (1 <= n && n <= 9999) {
        rub = Math.trunc(n / 100);
        kopeyki = n % 100;
        if (rub % 10 == 1 && rub % 100 !== 11 && rub != 11) {
            if (kopeyki % 10 == 1 && kopeyki % 100 !== 11 && kopeyki != 11) {
                return `${rub} рубль ${kopeyki} копейка`;
            } else if (kopeyki % 100 >= 12 && kopeyki % 100 <= 14) {
                return `${rub} рубль ${kopeyki} копеек`;
            } else if (kopeyki % 10 == 2 || kopeyki % 10 == 3 || kopeyki % 10 == 4) {
                return `${rub} рубль ${kopeyki} копейки`;
            } else {
                return `${rub} рубль ${kopeyki} копеек`;
            }
        } else if (rub % 100 >= 12 && rub % 100 <= 14) {
            if (kopeyki % 10 == 1 && kopeyki % 100 !== 11 && kopeyki != 11) {
                return `${rub} рублей ${kopeyki} копейка`;
            } else if (kopeyki % 100 >= 12 && kopeyki % 100 <= 14) {
                return `${rub} рублей ${kopeyki} копеек`;
            } else if (kopeyki % 10 == 2 || kopeyki % 10 == 3 || kopeyki % 10 == 4) {
                return `${rub} рублей ${kopeyki} копейки`;
            } else {
                return `${rub} рублей ${kopeyki} копеек`;
            }
        } else if (rub % 10 == 2 || rub % 10 == 3 || rub % 10 == 4) {
            if (kopeyki % 10 == 1 && kopeyki % 100 !== 11 && kopeyki != 11) {
                return `${rub} рубля ${kopeyki} копеек`;
            } else if (kopeyki % 100 >= 12 && kopeyki % 100 <= 14) {
                return `${rub} рубля ${kopeyki} копеек`;
            } else if (kopeyki % 10 == 2 || kopeyki % 10 == 3 || kopeyki % 10 == 4) {
                return `${rub} рубля ${kopeyki} копееки`;
            } else {
                return `${rub} рубля ${kopeyki} копеек`;
            }
        } else if (kopeyki === 1) {
            return `${rub} рублей ${kopeyki} копейка`;
        } else if ((rub === 0 && kopeyki % 10 == 2) || kopeyki % 10 == 3 || kopeyki % 10 == 4) {
            return `${rub} рублей ${kopeyki} копейки`;
        } else {
            return `${rub} рублей ${kopeyki} копеек`;
        }
    }
}
