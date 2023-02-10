'use strict';
// Даны натуральные числа от 20 до 50.Напечатать те из них, которые делятся на 3, но не делятся на 5.

let num = 21;

while (num > 20 && num < 50) {
    if (num % 3 === 0 && num % 5 !== 0) {
        document.write(num + '<br>');
    }
    num = num + 1;
}
