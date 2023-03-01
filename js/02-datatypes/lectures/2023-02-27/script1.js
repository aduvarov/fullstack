// 'use strict';

// // Number, BigInt

// // Округление
// // Math.floor, Math.ceil, Math.round, Math.trunc

// Math.floor(); //Округление в меньшую сторону
// Math.floor(5.1); // 5
// Math.floor(5.9); // 5
// Math.floor(-1.1); // -2
// Math.floor(-1.9); // -2

// Math.ceil(); // Округление в большую сторону
// Math.ceil(5.1); // 6
// Math.ceil(5.9); // 6
// Math.ceil(-1.1); // 1
// Math.ceil(-1.9); // 1

// Math.round(); // Округление до ближайшего целого (математическое округление)
// Math.round(3.1); // 3
// Math.round(3.6); // 4
// Math.round(3.5); // 4

// Math.trunc(); // Удаление дробной части
// Math.trunc(5.1); // 5
// Math.trunc(5.9); // 5
// Math.trunc(-1.1); // -1

// let num = 12.3456789;

// let phonePrice = 22211; // -30%
// phonePrice = phonePrice - (phonePrice * 30) / 100;

// // NaN Infinity -Infinity

// isFinite()

// let a = 5;
// let b = 6;
// let c = +prompt('Enter the number');
// let medium;

// if (isNaN(c)) {
//     console.log('error do not input chars');
// } else {
//     medium = (a + b + c) / 3;
//     console.log(`Medium is: ${medium}`);
// }

let bmw = 0;
let audi = 0;
let mercedes = 0;
let toyota = 0;
let nissan = 0;

for (let counter = 0; counter < 1000000; counter++) {
    let rnd = randomInteger(0, 4);
    switch (rnd) {
        case 0:
            bmw++;
            break;
        case 1:
            audi++;
            break;
        case 2:
            mercedes++;
            break;
        case 3:
            toyota++;
            break;
        case 4:
            nissan++;
            break;
    }
}

console.log(`bmw: ${bmw}`);
console.log(`audi: ${audi}`);
console.log(`mercedes: ${mercedes}`);
console.log(`toyota: ${toyota}`);
console.log(`nissan: ${nissan}`);

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
