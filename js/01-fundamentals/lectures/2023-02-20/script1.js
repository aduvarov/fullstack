'use strict';

// let numberA = 555;

// console.log(f1()); // 666
// console.log(f2()); // NaN
// console.log(f3(numberA)); // 666 + 777 + 666

// function f1() {
//     numberA = 666;
//     return numberA;
// }

// function f2(numberE) {
//     let numberB = 777;
//     return numberA + numberB + numberE;
// }

// function f3(numberC) {
//     let numberD = f2(f1(numberC));
//     return numberD;
// }

// Data Types
// 1. Symbol
// 2. String
// 3. Number
// 4. Boolean (true false)
// 5. Object ( Составной тип, он может состоять из одного или нескольких примитивов )
// 6. null
// 7. undefined
// 8. BigInt

// let abc = 'is a lJonJg established fact that a reader will be';

// let numString = '123435637839340';

// console.log(abc[5]);
// console.log(numString[3 + 2]);
// console.log(numString.at(5));
// console.log(numString.at(-1));
// console.log(numString.at(-2));
// console.log(numString[4]);
// console.log(numString.at(-6));

// console.log(abc.indexOf(' established'));
// console.log(abc.indexOf(' a'));
// console.log(abc.lastIndexOf(' a'), '------');

// let counter34 = 0;
// let pos = 0;
// while (true) {
//     let foundPos = numString.indexOf('34', pos);
//     if (foundPos === -1) {
//         break;
//     }
//     pos = foundPos + 1;
//     counter34++;
// }

// console.log(counter34);

// console.log(numString.includes('343'));

// let myString1 = 'kjasdkfjaksdjfhhkljdf3jkdjfsdf';
// let myString2 = 'sasdjfkasjdfhjsadfj';

// console.log(myString1.includes('3'));
// console.log(myString2.includes('3'));

// console.log(myString1.startsWith('kjasdk'));
// console.log(myString2.startsWith('kjasdk'));
// console.log(myString1.endsWith('sdf'));
// console.log(myString2.endsWith('sdf'));

let longString = 'Hello my name is Mihail and i programmer';
// .slice .substring .substr

// .slice(17, 23)
let userName = longString.slice(17, 23);
// console.log(userName);

// let userName = longString.substring(17, 24);
// console.log(userName);

// let userName = longString.substr(17, 6);
// console.log(userName);

console.log(userName);

console.log('Привет ' + userName);
console.log(`Привет ${userName}          ${userName} ${longString}`);
