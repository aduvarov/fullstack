'use strict';

//Дан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Необходимо пробежаться по массиву 3мя различными стандартными способами и подсчитать сумму всех элементов.
// Вообще основных способов 4. Если удасться 4мя то вообще супер. Этот способ мы пока не проходили, но возможно он уже встречался.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let summa = 0;
for (let index = 0; index < arr.length; index++) {
    summa += arr[index];
}

let summa1 = 0;
arr.forEach(element => {
    summa1 += element;
    return summa1;
});
let summa2 = 0;

for (let index of arr) {
    summa2 += index;
}
let summa3 = 0;
summa3 = arr => arr.reduce((a, c) => a + c);
