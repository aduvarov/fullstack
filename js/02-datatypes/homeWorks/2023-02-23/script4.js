'use strict';

// ['apple', 'cherry', 'lemon', 'raspberry', 'orange', 'gooseberry', 'kiwi', 'strawberry', 'banana', 'currant' ]
// Написать функцию которая принимает любые два массива одинакового размера, миксует их в результатирующий массив и возвращает его. Миксование должно происходить в чередующемся порядке.
// Функция должна работать с массивами одинаковой длины и с любыми данными, не только из примера.
let fruits = ['apple', 'lemon', 'orange', 'kiwi', 'banana'];
let berrys = ['cherry', 'raspberry', 'gooseberry', 'strawberry', 'currant'];

let result = mixTwoArrays(fruits, berrys);

console.log(result);
console.log(fruits);
console.log(berrys);
function mixTwoArrays(fruits, berrys) {
    let fruitsBerrys = [];
    let mix;
    for (let index = 0; index < fruits.length; index++) {
        mix = fruits[index];
        fruitsBerrys.push(mix);
        mix = berrys[index];
        fruitsBerrys.push(mix);
    }
    return fruitsBerrys;
}
