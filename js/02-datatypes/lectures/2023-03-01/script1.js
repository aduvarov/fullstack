'use strict';
//Написать функцию которая на вход принимает любой одномерный массив. Если в этом массиве окажутся три подряд идущих одинаковых элемента, то вернуть true. Если таких элементов не будет вернуть false

let linearArray = [123, 461, 461, 461, 461];

let result = array(linearArray);
console.log(result);

function array(linearArray) {
    for (let index = 0; index < linearArray.length - 2; index++) {
        let index1 = index + 1;
        if (linearArray[index] == linearArray[index1]) {
            if (linearArray[index1] == linearArray[index1 + 1]) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}
