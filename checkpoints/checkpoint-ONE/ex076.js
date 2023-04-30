'use strict';

//Поезд прибывает на станцию в a часов b минут и от-
// правляется в c часов d минут. Пассажир пришел на платформу
// в n часов m минут. Будет ли поезд стоять на платформе? Числа
// a, b, c, d, n, m – целые, 0 < a ≤ 23, 0 < b ≤ 59, 0 < c ≤ 23, 0 < d ≤ 59,
// 0 < n ≤ 23, 0 < m ≤ 59.
// result boolean

let a = 12; //прибытие
let b = 34;

let c = 13; //отправление
let d = 34;

let n = 12; //пасажир
let m = 50;

function trainBoarding(a, b, c, d, n, m) {
    if (
        a > 0 &&
        a < 23 &&
        b > 0 &&
        b <= 59 &&
        c > 0 &&
        c < 23 &&
        d > 0 &&
        d <= 59 &&
        n > 0 &&
        n < 23 &&
        m > 0 &&
        m <= 59
    ) {
        if (n < a) {
            return false;
        } else if (n > c) {
            return false;
        } else if (a === c) {
            if (m >= b && m < d) {
                return true;
            } else {
                return false;
            }
        } else if (n === a && n !== c) {
            if (m >= b) {
                return true;
            } else {
                return false;
            }
        } else if (n === c && n !== a) {
            if (m < d) {
                return true;
            } else {
                return false;
            }
        }
    }
}
