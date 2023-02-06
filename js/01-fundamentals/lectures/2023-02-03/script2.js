'use strict';

// let num; //  Переменная для хранения пользовательского числа.
// num = +prompt('Введите любое число:'); // Запросить у пользователя число и положить в переменную результат

// let result = num % 2;

// if (result === 0) {
//     alert('Вы ввели чётное число');
// } else {
//     alert('Вы ввели не чётное число');
// }

// let numberOne;
// let numberTwo;

// numberOne = +prompt('Введите первое число');
// numberTwo = +prompt('Введите второе число');

// if (numberOne === numberTwo) {
//     alert('Вы ввели одинаковые числа');
// } else if (numberOne > numberTwo) {
//     alert('Первое число больше второго');
// } else if (numberOne < numberTwo) {
//     alert('Второе число больше перового');
// }

// if (numberOne === numberTwo) {
//     alert('Вы ввели одинаковые числа');
// } else if (numberOne > numberTwo) {
//     alert('Первое число больше второго');
// } else  {
//     alert('Второе число больше перового');
// }

let number1;
let number2;
let number3;

alert('Нельзя вводить одинаковые числа');
number1 = +prompt('Введите первое число');
number2 = +prompt('Введите второе число');
number3 = +prompt('Введите третье число');
// 5 4 6
if (number1 > number2) {
    if (number1 > number3) {
        alert('Число ' + number1 + ' самое большое');
    }
    if (number3 > number1) {
        alert('Число ' + number3 + ' самое большое');
    }
} else if (number2 > number1) {
    if (number2 > number3) {
        alert('Число ' + number2 + ' самое большое');
    } else if (number3 > number2) {
        alert('Число ' + number3 + ' самое большое');
    } else {
        alert('Число ' + number2 + ' самое большое');
    }
}

// ==
// ===
// !==
// !=
// >
// <
// >=
// <=

// возвращют логическое значение. Результат может быть либо да либо нет. (true/false)

// if (true/false){
//    true
//} else {
//    false
//}
