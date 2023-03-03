'use strict';

//Сформировать массив случайных целых чисел в диапазоне от 1 до 9 включительно размером 1000 элементов. Нужна функция которая принимает массив и оставляет в нём только чётные числа. И возвращает его.

let randomNumber = [];
let rnd;

for (let counter = 0; counter < 1000; counter++) {
    rnd = randomInteger(1, 9);
    randomNumber.push(rnd);
}

let result = numberInteger(randomNumber);
console.log(result);

function numberInteger(randomNumber) {
    let numInteger = [];
    for (let index = 0; index < randomNumber.length; index++) {
        if (randomNumber[index] % 2 === 0) {
            numInteger.push(randomNumber[index]);
        }
    }
    return numInteger;
}

function randomInteger() {
    let rand = 11 + Math.random() * (29 + 1 - 11);
    return Math.floor(rand);
}
