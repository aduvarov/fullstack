'use strict';

//Составить программу, которая в зависимости от порядкового номера месяца (1, 2, ..., 12) и года (например 2023) выводит на экран количество дней в этом месяце. Год может быть високосным.

let k = 2;
let year = 2023;

function daysInMonth(year, k) {
    if (year % 100 === 0 && year % 400 === 0) {
        switch (k) {
            case 2:
                k = 29;
                break;
        }
    } else if (year % 4 === 0 && year % 100 !== 0) {
        switch (k) {
            case 2:
                k = 29;
                break;
        }
    } else {
        switch (k) {
            case 2:
                k = 28;
                break;
        }
    }
    switch (k) {
        case 1:
            k = 31;
            break;

        case 3:
            k = 31;
            break;
        case 4:
            k = 30;
            break;
        case 5:
            k = 31;
            break;
        case 6:
            k = 30;
            break;
        case 7:
            k = 31;
            break;
        case 8:
            k = 31;
            break;
        case 9:
            k = 30;
            break;
        case 10:
            k = 31;
            break;
        case 11:
            k = 30;
            break;
        case 12:
            k = 31;
            break;
    }
    return k;
}
