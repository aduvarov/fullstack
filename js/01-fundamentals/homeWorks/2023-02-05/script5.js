// 5. На сковородку одновременно можно положить k котлет. Каждую котлету
// нужно с каждой стороны обжаривать m минут непрерывно. За какое
// наименьшее время удастся поджарить с обеих сторон n котлет? Вводятся 3
// числа: k, m и n.
// Задать пользователю три вопроса:  Сколько котлет всего нужно пожарить? Сколько котлет помещается на сковородке за раз? Сколько минут нужно жарить котлету с каждой стороны?
// И затем вывести пользователю ответ: На жарку котлет уйдёт столько то времени.

'use strict';

// 15 / 5

// let kutlets = +prompt('Сколько котлет всего нужно пожарить?');
// let pan = +prompt('Сколько котлет помещается на сковородке за раз?');
// let time = +prompt('Сколько минут нужно жарить котлету с каждой стороны?') * 2;
// let periods = Math.trunc(kutlets / pan);

// if (kutlets % pan) {
//     ++periods;
// }
// let result = periods * time;

// alert('Вам понадабится ' + result + ' минут');

console.log(60 / (10 * '2'), 'You answer is: 3');
console.log(50 / (10 / '2'), 'You answer is: 10');
console.log(50 / (10 - ' 5'), 'You answer is: 10');
console.log(50 / (10 - '5 '), 'You answer is: 10');
console.log(50 / (10 - '5 0'), 'You answer is: 10');
//console.log(number1 - '10', 'You answer is: error');
//console.log(number1 + '10', 'You answer is: number110');
console.log(typeof 100500, 'You answer is: number');
console.log(
    String(typeof Number(Boolean(0))),
    'You answer is: string "number:'
);
console.log(undefined == undefined, 'You answer is: false');
console.log(undefined == null, 'You answer is: true');
console.log('Резльутат умножения 5' * 2 + ' будет:NaN ');
