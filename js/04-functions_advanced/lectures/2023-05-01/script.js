'use strict';

// let username = 'Misha';

// let sayHi = () => {
//     console.log(`Hi ${username}`);
// };

// username = 'Mihail';
// sayHi();

// let sumPlusY;
// sumPlusY = sumPlusX(5);

// let summa;
// summa = sumPlusY(10);
// console.log(summa);

// function sumPlusX(x) {
//     return function (y) {
//         return x + y;
//     };
// }
///////////////////////////////////////
// let greetUser = () => {
//     let greet = 'Hello';
//     return function (username) {
//         return `${greet} ${username}`;
//     };
// };

// let greetMisha = greetUser();

// console.log(greetMisha('Misha'));
/////////////////////////////////////

function makeCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter2());
console.log(counter2());
