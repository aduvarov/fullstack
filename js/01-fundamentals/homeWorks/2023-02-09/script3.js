'use strict';
//Найти сумму чисел от 100 до 200 кратных 17.

let num = 100;
let sum = 0;
while (num >= 100 && num <= 200) {
    if (num % 17 === 0) {
        document.write(num + '<br>');
        sum = sum + num;
    }
    num = num + 1;
}
document.write(sum + '<br>');
