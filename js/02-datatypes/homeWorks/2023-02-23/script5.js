'use strict';
// Написать функцию которая на вход получает массив чисел и искомое значение по которому нужно определить кол-во его повторов. Возвращает кол-во повторов определённого значения в этом массиве.

let sourceArray = ['apple', 444, 111, 'raspberry', 777, true, '777', 'orange', 222, null, 777];
let search = 0;
let counter = 0;
let pos = 0;
let result = searchRepeats(sourceArray, search); // 2
console.log(result);
function searchRepeats(sourceArray, search) {
    for (let count = 0; count < sourceArray.length; count++) {
        search = sourceArray.indexOf(777, count);
        if (count == search) {
            counter++;
        }
    }

    return counter;
}
