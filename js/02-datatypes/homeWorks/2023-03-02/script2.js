'use strict';
// рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

// Для примера:

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// Правильный ответ должен быть 17.
// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined

let counter = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];
let result = counterTrue(counter);
console.log(result);
function counterTrue(counter) {
    let count = 0;
    for (let index = 0; index < counter.length; index++) {
        if (counter[index] === null) {
            return null;
        }
        if (counter[index] === null) {
            return undefined;
        }
        if (counter[index] === true) {
            count++;
        }
    }
    return count;
}
