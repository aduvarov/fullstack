'use strict';

// SyntaxError
// TypeError
// ReferenceError

// Error object (message, name, stack)

// try {
//     console.log('Block try');
//     let length = 50;
//     let result = lengt;
// } catch (error) {
//     console.log(error.name);
//     if (error.name === 'TypeError') {
//         console.log('Неверное исползование типов');
//     } else if (error.name === 'ReferenceError') {
//         alert('Обращение к необъявленной переменной');
//     }
// }

// function div(a, b) {
//     if (b === 0) {
//         let err = new Error('Error1');
//         throw { name: 'MathError', message: 'Division by zero' };
//     }
//     return a / b;
// }

// try {
//     console.log('External try');
//     try {
//         console.log('Internal Block try');
//         let a = 5;
//         a();
//         divdiv();
//         console.log(div(30, 0));
//     } catch (error) {
//         console.log('Internal Block catch');
//         if (error.name === 'MathError') {
//             console.log(error.message);
//             // // //
//         } else {
//             throw error;
//         }
//     }
// } catch (error) {
//     console.log('External catch');
//     if (error.name === 'ReferenceError') {
//         console.log(error.name);
//         console.log(error.message);
//     } else {
//         throw error;
//     }
// }

// External try
// Internal Block try
// Internal Block catch
// External catch
///////////////////////////////

// function f1() {
//     try {
//         return result;
//         console.log('Block try');
//         let result = div(30, 1);
//     } catch (error) {
//         console.log('Block catch');
//         console.log(error.name);
//     } finally {
//         console.log('Block finally');
//     }
// }

// console.log(f1());

// console.log('script continue...');

//block catch
// ReferenceError
//Block finally
//script continue...

// function f() {
//     try {
//         console.log('начало');
//         return 'result';
//     } catch (e) {
//         /// ...
//     } finally {
//         console.log('очистка!');
//     }
// }

// f(); // очистка!

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}

let err = new FormatError('ошибка форматирования');

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
