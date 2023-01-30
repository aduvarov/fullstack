'use strict';

let msg;

let message = 'Hello world!';
console.log(msg);

let banknota5;
let banknota10;
let banknota20;
let banknota50;
let banknota100;
let banknota200;
let banknota500;
let bankomatMessage = 'Программа подсчёта денег по купюрам';

alert(bankomatMessage);
banknota5 = prompt('Сколько вам выдал банкомат купюр по 5 руб');
banknota5 = Number(banknota5);

banknota10 = prompt('Сколько вам выдал банкомат купюр по 10 руб');
banknota10 = Number(banknota10);

banknota20 = prompt('Сколько вам выдал банкомат купюр по 20 руб');
banknota20 = Number(banknota20);

banknota50 = prompt('Сколько вам выдал банкомат купюр по 50 руб');
banknota50 = Number(banknota50);

banknota100 = prompt('Сколько вам выдал банкомат купюр по 100 руб');
banknota100 = Number(banknota100);

banknota200 = prompt('Сколько вам выдал банкомат купюр по 200 руб');
banknota200 = Number(banknota200);

banknota500 = prompt('Сколько вам выдал банкомат купюр по 500 руб');
banknota500 = Number(banknota500);

let sum =
    banknota5 * 5 +
    banknota10 * 10 +
    banknota20 * 20 +
    banknota50 * 50 +
    banknota100 * 100 +
    banknota200 * 200 +
    banknota500 * 500;

alert('Получилось' + ' ' + sum + ' руб');

// DATATYPES
// 1. Number (1)
// 2. String ('text', '1')
// 3. undefined
// 4. null
// 5. boolean (true, false)
// 6. BigInt
// 7. Symbol
// 8. Object
