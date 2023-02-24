'use strict';

// Массив чисел для примера [111, 222, 333, 444, 555, 666, 777, 888, 999]. Среднее 555.
//Написать функцию которая на вход получает массив чисел и возвращает его среднее арифметическое.
//Функция должна работать с массивом произвольной длины и с любыми числами, не только из примера.

let number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
let counter;
let medium = 0;
let result = mediumNamber(number);
console.log(counter);
function mediumNamber(number) {
    for (let count = 0; count < number.length; count++) {
        counter = medium += number[count];
    }
    counter = counter / number.length;
}
