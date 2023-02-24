'use strict';
//Массив чисел для примера [333, 444, 111, 666, 777, 888, 999, 222, 555]. Максимальное 999.
// Написать функцию которая на вход получает массив чисел и возвращает самое большое число в этом массиве.
// Функция должна работать с массивом произвольной длины и с любыми числами, не только из примера.

let number = [333, 444, 111, 666, 777, 888, 999, 222, 555];
let maxNum = 0;
let result = maxNumber(number);
console.log(result);
function maxNumber(number) {
    for (let index = 0; index < number.length; index++) {
        if (number[index] > maxNum) {
            maxNum = number[index];
        }
    }
    return maxNum;
}
