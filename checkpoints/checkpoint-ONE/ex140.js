'use strict';

//Дан массив чисел [-1, 1, 30, -50, -10, -2, -5, 30, 40, 21, -4 ], вернуть новый массив в котором каждый отрицательный элемент заменить абсолютной величиной. Необходимо использовать метод .map()

let array = [-1, 1, 30, -50, -10, -2, -5, 30, 40, 21, -4];

let newArray = array.map(element => {
    if (element < 0) {
        element = Math.abs(element);
    }
    return element;
});
