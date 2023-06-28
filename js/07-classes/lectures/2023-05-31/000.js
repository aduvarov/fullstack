'use strict';
////////////////////////////////////////////
// Objects
// let animal = {
//     eat() {
//         console.log('животое кушает');
//     },
//     sleep() {
//         console.log('животное спит');
//     },
// };

// let dog = {
//     __proto__: animal,
//     eat() {
//         console.log('собака ест мясо');
//     },
// };
// let cow = {
//     __proto__: animal,
//     eat() {
//         console.log('корова ест траву');
//     },
// };
////////////////////////////////////////////
function Animal() {}

Animal.prototype.eat = function () {
    console.log('животное кушает');
};
Animal.prototype.sleep = function () {
    console.log('животное спит');
};

let dog = {
    __proto__: Animal.prototype,
    eat() {
        console.log('Собака ест мясо');
    },
};
let cow = {
    __proto__: Animal.prototype,
    eat() {
        console.log('Корова ест траву');
    },
};
////////////////////////////////////////////
dog.eat();
dog.sleep();
console.log('--------------');
cow.eat();
cow.sleep();

// let car = {
//     _eningeStartedStoped: 'stoped',
//     get eningeStartedStoped() {
//         return this._eningeStartedStoped;
//     },
//     set eningeStartedStoped(value) {
//         let arr = ['started', 'stoped'];
//         if (arr.includes(value)) {
//             if (value === 'started' && this._eningeStartedStoped === 'started') {
//                 console.error('Error: машина уже заведена');
//             } else if (value === 'stoped' && this._eningeStartedStoped === 'stoped') {
//                 console.error('Error: машина уже заглушена');
//             } else if (value === 'started' && this._eningeStartedStoped === 'stoped') {
//                 this._eningeStartedStoped = value;
//                 console.log('Машина заводится');
//             } else {
//                 this._eningeStartedStoped = value;
//                 console.log('Машина глушитcя');
//             }
//         } else {
//             console.error('Error: started или stoped');
//         }
//     },
// };

// let audi = {
//     __proto__: car,
// };

// let bmw = {
//     __proto__: car,
// };

// audi.eningeStartedStoped = 'started';
// audi.eningeStartedStoped = 'started';
// bmw.eningeStartedStoped = 'started';
// bmw.eningeStartedStoped = 'stoped';
// bmw.eningeStartedStoped = 'stoped';

// console.log(audi.eningeStartedStoped);
// console.log(bmw.eningeStartedStoped);
