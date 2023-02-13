'use strict';

// // && возвращает первое ложное значение или последнее истинное
// // || возвращает первое истинное значение или последнее ложное

// let a = 0 || '';
// a += 4;
// document.write(a + 1);

// alert('Программа для сложения 2 чисел');
// let number1 = +prompt('Введите 1 число');
// let number2 = +prompt('Введите 2 число');
// let total;
// total = summa(number1, number2);

// document.write('Результат сложения 2 чисел: ' + total);

// function summa(num1, num2) {
//     let result;
//     result = num1 + num2;
//     return result;
// }

// let firstStr = '**'; //prompt('Введите строчку которую нужно размножить'); // '**'
// let num = 2; //+prompt('Введите число на которое нужно размножить строчку'); // 2
// let resultStr;

// resultStr = multiplyStrings1(firstStr, num);

// document.write(resultStr);

// multiplyStrings('X', 3); // 'XXX'
// multiplyStrings('**', 4); // '********'

// function multiplyStrings1(str, num) {
//     let result = '';
//     for (let counter = 1; counter <= num; counter++) {
//         result = result + str;
//     }
//     return result;
// }

// let multiplyStrings2 = function (str, num) {
//     let result = '';
//     for (let counter = 1; counter <= num; counter++) {
//         result = result + str;
//     }
//     return result;
// };

let numberA = 5;
let numberB = 3;

let result = pow(numberA, numberB);

console.log(result);

function pow(numA, numB) {
    let result = numA;
    while (numB > 1) {
        result = result * numA;
        numB--;
    }
    return result;
}

// 1). Объявляется с помощью ключевого слова function
// 2). Функция может принимать аргументы.
// 3). Аргуметов может быть 0 или больше и они становятся локальными переменными.
// 4). Объявленные в функции переменные работают только внутри этой функции.
// 5). Внутри функции нужно писать код. Он пишется в теле функции. Тело функции ограничевается фигурными скобками.
// 6). Функция всегда возвращает значение. Если не указан return функция возвращает undefined.
// 7). Именовать функции желательно словом глаголом. От слова делать.
