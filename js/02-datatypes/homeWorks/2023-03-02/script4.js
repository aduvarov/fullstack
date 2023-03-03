'use strict';
// Сформировать массив случайных целых чисел в диапазоне от 11 до 29 включительно размером 1000 элементов. Подсчитать сумму всех чисел в массиве делящихся на 5. Подсчитать сумму всех чисел делящихся на 3.
let randomNumber = [];
let rnd;
for (let counter = 0; counter < 1000; counter++) {
    rnd = randomInteger(11, 29);
    randomNumber.push(rnd);
}

let numberFive = 0;
for (let index = 0; index < randomNumber.length; index++) {
    if (randomNumber[index] % 5 === 0) {
        numberFive = numberFive + randomNumber[index];
    }
}
let numberThree = 0;
for (let index = 0; index < randomNumber.length; index++) {
    if (randomNumber[index] % 3 === 0) {
        numberThree = numberThree + randomNumber[index];
    }
}

console.log('Сумма чисел делящихся на 5: ' + numberFive);
console.log('Сумма чисел делящихся на 3: ' + numberThree);

function randomInteger() {
    let rand = 11 + Math.random() * (29 + 1 - 11);
    return Math.floor(rand);
}
