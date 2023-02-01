'use strict';

alert('Программа вычисляющая процентное отношение двух чисел');

let firstNumber = Number(prompt('Первое число'));
let secondNumber = Number(prompt('Второе число'));

let result = (firstNumber / secondNumber) * 100;
alert(result + '%');
