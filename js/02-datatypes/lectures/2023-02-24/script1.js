'use strict';

// let garage = ['BMW_X5', 'AUDI_Q5', 'MERCEDES_GL500', 'LEXUS_GX460'];

// // for (let index = 0; index < garage.length; index++) {
// //     console.log(garage[index]);
// // }

// for (let car of garage) {
//     console.log(car);
// }

// let month1 = ['Январь', 'Март', 'Апрель', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];

// let month2 = [];

// // for (let month of month1) {
// //     month2.push(month);
// // }

// // console.log(month2);

let originalString = 'агудар';
console.log('originalString: ', originalString);
let reverseString = originalString.split('').reverse().join('');
console.log('reverseString: ', reverseString);
