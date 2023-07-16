'use strict';

// promise states (3)
// pending
// fulfilled (result value)
// rejected  (result error)

// promise result
// .then (обработка положительного результата)
// .catch (обработка отрицательного результата)
// .finally (обработка любого результата)

// let promise = new Promise((resolve, reject) => {
//     let ev = randomInteger();
//     if (ev >= 4) {
//         resolve('notebook');
//     } else {
//         reject(new Error('book'));
//     }
// });

// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

// function randomInteger(min = 2, max = 5) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

//promise.then().catch().then().then().cahch().then().then().catch();
