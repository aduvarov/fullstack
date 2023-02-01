'use strict';

alert('Программа вычисляющая среднее значение 5 чисел');

let firstnumber;
let secondnumber;
let thirdnumber;
let fourthnumber;
let fifthnumber;

firstnumber = Number(prompt('Первое число'));
secondnumber = Number(prompt('Второе число'));
thirdnumber = Number(prompt('третье число'));
fourthnumber = Number(prompt('четвертое число'));
fifthnumber = Number(prompt('пятое число'));

let total =
    (firstnumber + secondnumber + thirdnumber + fourthnumber + fifthnumber) / 5;
alert('Среднее значение 5 чисел ' + total);
