'use strict';
//Простые числа
//Задача: реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. Простое //число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). Если число простое - функция должна вернуть true, в противном случае false.
//Решение: самый простой способ проверить число на простоту - попробовать поделить его на все числа от 2 до самого числа (на само число не делим). Если ни на одно из этих чисел наше число не поделится - оно простое, а если хотя бы на одно поделится - вернем false и выйдем из функции:

let number = +prompt('Введите число');
let number1;
let result = isSimple(number);
document.write(result);
function isSimple(number1) {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (number1 = 2; number1 < number; number1++) {
            if (number % number1 === 0) {
                return false;
            }
        }
        return true;
    }
}
