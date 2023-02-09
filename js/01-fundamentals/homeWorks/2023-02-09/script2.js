'use strict';
// Найти произведение двузначных нечетных чисел кратных 13.

let num = 11;

while (num >= 11 && num <= 99) {
    if (num % 13 === 0 && num % 2 !== 0) {
        document.write(num + '<br>');
    }
    num = num + 1;
}
