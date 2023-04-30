'use strict';

//Дано натуральное число n (n ≤ 999999). Заполнить мас-
// сив его цифрами, расположенными в обратном порядке (первый
//элемент равен последней цифре, второй – предпоследней и т. д.).
//Незаполненные элементы массива должны быть равны нулю.
//result array

let number = 2325;

function numberReverse(number) {
    let array = [0, 0, 0, 0, 0, 0];
    let num = number.toString().length - 1;
    for (let index = 0; index < number.toString().length; index++) {
        array[index] = Number(number.toString()[num]);
        num--;
    }
    return array;
}
