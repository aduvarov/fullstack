'use strict';

//Вывести на экран все нечетные двузначные числа, у ко-
// торых последняя цифра равна 3 или 7.

let num = [];

for (let index = 10; index < 99; index++) {
    if (index % 2 !== 0) {
        if (Number(index.toString()[1]) === 3 || Number(index.toString()[1]) === 7) {
            num.push(index);
        }
    }
}
console.log(num);
