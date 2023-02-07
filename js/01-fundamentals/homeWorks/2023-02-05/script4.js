// Пользователь вводит порядковый номер пальца руки. Необходимо
// показать его название на экран.

'use strict';

let num1 = 'большой';
let num2 = 'указательный';
let num3 = 'средний';
let num4 = 'безымянный';
let num5 = 'мизинец';

let fingerNum = +prompt('Введите порядковый номер пальца');

if (fingerNum === 1) {
    alert(num1);
} else if (fingerNum === 2) {
    alert(num2);
} else if (fingerNum === 3) {
    alert(num3);
} else if (fingerNum === 4) {
    alert(num4);
} else if (fingerNum === 5) {
    alert(num5);
} else {
    alert('Ввели неправильный номер пальца');
}
