'use strict';
// Массив чисел для примера [333, 444, 111, 666, 777, 888, 999, 222, 555, 777].
// Ответ: [333, 444, 111, 666, 'You are LUCKY!', 888, 999, 222, 555, 'You are LUCKY!']
// Написать функцию которая на вход получает массив чисел и возвращает изменённый массив, в котором все числа 777
// должны быть заменены на строку 'You are LUCKY!'.
// Функция должна работать с массивом произвольной длины и с любыми числами, не только из примера.

let numbers = [333, 444, 111, 666, 777, 888, 999, 222, 555, 777];
let result = lucky(numbers);
console.log(result);
function lucky(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] == 777) {
            numbers[index] = 'You are LUCKY!';
        }
    }
    return numbers;
}
