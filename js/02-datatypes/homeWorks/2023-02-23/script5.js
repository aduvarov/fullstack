'use strict';
// Написать функцию которая на вход получает массив чисел и искомое значение по которому нужно определить кол-во его повторов. Возвращает кол-во повторов определённого значения в этом массиве.

let sourceArray = ['apple', 444, 111, 'raspberry', 777, true, '777', 'orange', 222, null, 777];
let search = 777;
let result = searchRepeats(sourceArray, search); // 2w
console.log(result);
function searchRepeats(sourceArray, search) {
    let counter = 0;
    for (let element of sourceArray) {
        if (element === search) {
            counter++;
        }
    }
    return counter;
}
