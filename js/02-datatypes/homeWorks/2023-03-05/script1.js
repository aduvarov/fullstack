'use strict';
// Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения. Например: [1, 2, 3] --> [2, 4, 6]

let numbers = [1, 2, 3, 4, 5, 6, 7];

let number = numbers.map(modify);
console.log(number);

function modify(element) {
    element = element * 2;
    return element;
}

// function maps(x){
//     return x.map(n => n * 2);
// }
