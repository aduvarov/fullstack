'use strict';

//Имеется массив дат ['2023-07-07', '2022-08-08', '2021-01-01', '2024-01-01', '2023-12-31', '2023-03-08']
// Написасть функцию которая принимает массив дат в формате ISO и возвращает массив из двух элеметов с минимальной и максимальной датами. ['2021-01-01', '2024-01-01']

let date = ['2023-07-07', '2022-08-08', '2021-01-01', '2024-01-01', '2023-12-31', '2023-03-08'];
let result = minAndMaxDate(date);
console.log(result);

function minAndMaxDate(date) {
    let minDate = date[0];
    let maxDate = date[0];
    let minAndMax = [];
    for (let index = 0; index < date.length; index++) {
        if (minDate > date[index]) {
            minDate = date[index];
        }
        if (maxDate < date[index]) {
            maxDate = date[index];
        }
    }
    minAndMax.push(minDate);
    minAndMax.push(maxDate);
    return minAndMax;
}
