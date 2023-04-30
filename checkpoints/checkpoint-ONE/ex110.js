'use strict';

//Подготовьте фрагмент программы, в котором должны
// вводиться 10 чисел. Если будет введено число 0, ввод должен пре-
// кратиться.

let num = 0;

function numbers(num) {
    let numbers = [];
    for (let index = 0; index < 10; index++) {
        num = +prompt('Введите число');
        if (num === 0) {
            return 'Error: введите число не равное 0';
        }
        numbers.push(num);
    }
    return numbers;
}
