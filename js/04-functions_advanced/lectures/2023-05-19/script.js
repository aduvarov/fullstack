'use strict';

// let o = {
//     x: 1,
// };

// console.log(o.x); //1

// let a = 'x';

// o.a = 2;
// console.log(o.x); //1

// let b = 'x';
// o[b] = 3;
// console.log(o.x); //3

// let c = 'x';
// o[c] = 4;
// console.log(o.c.c); //

// let o = {
//     someMethod: function () {
//         console.log('Hello');
//     },
//     // toString: function () {
//     //     return 'Hello i am string!';
//     // },
// };

// console.log(o.someMethod());
// //console.log(o.someOtherMethod());
// console.log(o.toString());

// let user = {
//     _userName: null,
//     _lastName: null,
//     get fullName() {
//         return this._lastName + ' ' + this._userName;
//     },
//     set fullName(str) {
//         // 'Mihail Prokopchik'
//         this._userName = str.split(' ')[0];
//         this._lastName = str.split(' ')[1];
//     },
// };

// let car = {
//     engine: 'gasoline',
//     wheels: 4,
//     doors: 4,
//     power: 110,
//     isStarted: false,
// };

// let truck = Object.create(car);
// let passenger = Object.create(car);

// truck.trailerVolume = 40;
// passenger.trunkVolume = 300;

// let bmw = Object.create(passenger);
// let daf = Object.create(truck);

// bmw {}

// let animal = {
//     voice: '',
//     step() {
//         console.log('Animal step');
//     },
//     say() {
//         console.log(this.voice);
//     },
// };

// let cat = Object.create(animal);
// cat.voice = 'Miau';

// let dog = Object.create(animal);
// dog.voice = 'Gav gav';

// cat.say();
// dog.say();

// let prototype1 = {
//     x: 5,
// };

// let prototype2 = Object.create(prototype1);
// prototype2.y = 6;

// let prototype3 = Object.create(prototype2);
// prototype3.z = 7;

// let obj = Object.create(prototype3);
// console.log(obj.d); // 5

// let obj2 = {};
// console.log(obj.d);

// obj > prototype3 > prototype2 > prototype1 > Object > null
// obj2 > prototype2 > prototype1 > Object > null
// obj2 > Object > null

// let user = {
//     name: 'enterName',
//     lastName: 'enterLastName',
// };

// let vasya = {
//     age: 18,
// };

// vasya.__proto__ = user;
// vasya.name = 'Vasiliy';
// console.log(vasya.lastName);

// let carPrototype = {
//     isStarted: false,
//     isDrive: false,
//     direction: 'N',
//     engineStartStop() {
//         this.isStarted = !this.isStarted;
//     },
//     start() {
//         if (!this.isStarted) {
//             return console.error('Errror: engine not started. Please turn on engline');
//         }
//         this.isDrive = true;
//     },
//     stop() {
//         this.isDrive = false;
//     },
//     setDirection(dir) {
//         this.direction = dir;
//     },
// };

// let audi = {
//     __proto__: carPrototype,
// };
// let bmw = Object.create(carPrototype);

// let nissan = {};

// nissan.__proto_ = carPrototype;

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    __proto__: hamster,
};

let lazy = {
    __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

let animal = {};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

alert(rabbit.jumps); // ? (1)true

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2)null

delete animal.jumps;

alert(rabbit.jumps); // ? (3)undefined
