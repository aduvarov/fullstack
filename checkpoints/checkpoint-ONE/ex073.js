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
        if (rub % 10 == 1 && rub != 11) {
            return `${rub} рубль ${kopeyki} копеек`;
        } else if (rub >= 12 && rub <= 14) {
            return `${rub} рублей ${kopeyki} копеек`;
        } else if (rub % 10 == 2 || rub % 10 == 3 || rub % 10 == 4) {
            return `${rub} рубля ${kopeyki} копеек`;
        } else {
            return `${rub} рублей ${kopeyki} копеек`;
        }
    }
}
