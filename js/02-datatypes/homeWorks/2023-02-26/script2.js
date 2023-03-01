'use strict';
//оличества отрицательных и положительных элементов в массиве
//Написать функцию чтобы в заданном массиве чисел находить (посчитать) количество положительных и количество отрицательных элементов. Функция должна возвращать массив из двух элементов, где первый элемент массива - кол-во положительных, второй элемент массива - кол-во отрицательных

// Например, задан массив целых чисел [10, -5, 3, 2, 0, -1, 8, 0, 10, 3]. В нем 6 положительных и 2 отрицательных элемента (нули ни к тем, ни к другим не относятся). return [6, 2]

let counter1 = 0;
let counter2 = 0;
let linearArray = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];
let result = countNumbers(linearArray);

console.log(linearArray);
console.log(result);

function countNumbers(linearArray) {
    let result = [];
    for (let index = 0; index < linearArray.length; index++) {
        if (linearArray[index] < 0) {
            counter1++;
        } else if (linearArray[index] > 0) {
            counter2++;
        }
    }
    result.push(counter2);
    result.push(counter1);

    return result;
}
