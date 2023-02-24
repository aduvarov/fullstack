'use strict';

// let numberA = 5;
// console.log(f1(numberA)); // 7
// console.log(f2(numberA)); // 5
// console.log(f3(numberA)); // 5
// console.log(f4(numberA)); // 5

// function f1(numberA) {
//     numberA += 2;
//     return numberA;
// }

// function f2() {
//     numberA = 5;
//     return numberA;
// }

// function f3() {
//     let numberA = 5;
//     return numberA;
// }

// function f4(numberB) {
//     numberA = 7;
//     return numberB;
// }
////////////////////////////////////////////

// let stringA;

// function f1() {
//     let stringA = 'bmw';
// }

// console.log('stringA: ', stringA); //undefined

/////////////////////////////////////////////////

// let str1 = 'javascript';
// let result1, result2, result3, result4, result5;

// result1 = str1.slice(2, 5);
// console.log('result1: vas', result1); //

// result2 = str1.startsWith('J'.toLowerCase());
// console.log('result2: true', result2); //

// result3 = str1.substring(4).slice(0, 3).toUpperCase();
// console.log('result3: SCR', result3); //

// result4 = str1.includes('java');
// console.log('result4: true', result4); //

// result5 = str1.lastIndexOf('A');
// console.log('result5: -1', result5); //

/////////////////////////////////////////

let carBrands1 = ['bmw', 'audi', 'mercedes', 'renault', 'volkswagen', 'Volvo', 'lada', 'porcshe'];
// console.log(carBrands1);
// let carBrands2 = [];

// for (let index = 0; index < carBrands.length; index++) {
//     document.write(`${carBrands[index]} <br>`);
// }

// for (let index = carBrands.length - 1; index >= 0; index--) {
//     document.write(`${carBrands[index]} <br>`);
// }

// for (let index = carBrands.length; index > 0; index--) {
//     document.write(`${carBrands.pop()} <br>`);
// }

// for (let count = carBrands1.length; count > 0; count--) {
//     let car = carBrands1.pop();
//     carBrands2.push(car);
// }
// console.log(carBrands1);
// console.log(carBrands2);

//shift()
//unshift()
// for (let count = carBrands1.length; count > 0; count--) {
//     let car = carBrands1.shift();
//     carBrands2.push(carBrands1.shift());
// }
// console.log(carBrands2);

// push - добавляет элемент в конец массива
// pop - удаляет элемент в конце массива и возвращает его
//  unshift - добавляет элемент в начало массива
// shift - удаляет элемент в начале массива и возврашает его

for (let car of carBrands1) {
    document.write(`${car.toUpperCase()} <br>`);
}

// for..of

// let myString = 'Mercedes';

// for (let bukva of myString) {
//     document.write(`${bukva} <br>`);
// }
