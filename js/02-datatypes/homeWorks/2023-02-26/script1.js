'use strict';

let linearArray = [46, 70, 363, 406, 413, 669, 697, 782, 790, 968];

let num = +prompt('Введите любое число');

let result = insert2liner(linearArray, num);
console.log(result);

function insert2liner(linearArray, num) {
    for (let index = 0; index < linearArray.length; index++) {
        if (num <= linearArray[index]) {
            linearArray.splice(index, 0, num);
            return linearArray;
        }
    }
}
