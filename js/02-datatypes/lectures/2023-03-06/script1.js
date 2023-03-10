'use strict';

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//     [13, 14, 15],
// ];

// let house = [
//     [
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня3', 'зал3', 'спальня3'],
//     ],
//     [
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//     ],
//     [
//         ['кухня7', 'зал7', 'спальня7'],
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//     ],
//     [
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня1', 'зал1', 'спальня1'],
//     ],
//     [
//         ['кухня1', 'зал1', 'спальня1'],
//         ['кухня14', 'зал14', 'спальня14'],
//         ['кухня1', 'зал1', 'спальня1'],
//     ],
// ];

// let kv7 = house[4][1][2];
// console.log(kv7);
// let table = [];

// for (let row = 0; row < 3; row++) {
//     table.push([]);
//     for (let col = 0; col < 3; col++) {
//         table[row].push([]);
//         table[row][col].push('*');
//     }
// }
// console.log(table);
// let house = [];

// let flat = 1;
// for (let row = 0; row < 5; row++) {
//     house.push([]);
//     for (let col = 0; col < 3; col++) {
//         house[row].push(flat);
//         flat++;
//     }
// }

// console.log(house);

// let table = [];

// for (let row = 0; row < 10; row++) {
//     table.push([]);
//     for (let col = 0; col < 10; col++) {
//         table[row].push(randomInteger(1, 10));
//     }
// }

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// console.log(table);

// let table = [];

// for (let row = 0; row < 10; row++) {
//     table.push([]);
//     for (let col = 0; col < 10; col++) {
//         table[row].push(randomInteger(1, row + 1));
//     }
// }
// console.log(table);

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
if (month < 10) {
    month = '0' + month;
}
let day = now.getDate();
if (day < 10) {
    day = '0' + day;
}

let date = `${year}-${month}-${day}`;
console.log(date);
