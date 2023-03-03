'use strict';

//За основу взять домашнее задание со средней температурой больного. Доработать задание так, чтобы на каждый запрос температуры в prompt выводилось  время запроса. Например начиная с 6 утра
// Введите температуру больного в 06:00
// Введите температуру больного в 10:00
// Введите температуру больного в 14:00
// Введите температуру больного в 18:00
// Введите температуру больного в 22:00
// Введите температуру больного в 02:00.
// Это нужно сделать с помощью switch case

let temperatures = [];
let minTemp;
let mediumTemp;
let maxTemp;
let result = getTemp(temperatures);
// .toFixed(1);
if (result !== null) {
    minTemp = getMinTemp(result);
    mediumTemp = getMediumTemp(result).toFixed(1);
    maxTemp = getMaxTemp(result);
    document.write(`
    Максимальная температура: ${maxTemp}<br>
    Минимальная температура: ${minTemp}<br>
    Средняя температура: ${mediumTemp}`);
}

//exit
function getTemp(temperatures) {
    let count = 6;
    let temp;
    while (count > 0) {
        switch (count) {
            case 6:
                temp = prompt('Введите температуру больного в 06:00');
                break;
            case 5:
                temp = prompt('Введите температуру больного в 10:00');
                break;
            case 4:
                temp = prompt('Введите температуру больного в 14:00');
                break;
            case 3:
                temp = prompt('Введите температуру больного в 18:00');
                break;
            case 2:
                temp = prompt('Введите температуру больного в 22:00');
                break;
            case 1:
                temp = prompt('Введите температуру больного в 02:00');
                break;
        }
        if (temp === null) {
            return null;
        }
        if (temp < 34 || temp > 43 || isNaN(temp)) {
            alert('Неверные данные');
            continue;
        }
        temperatures.push(temp);
        count--;
    }
    return temperatures;
}
function getMinTemp(temperatures) {
    let minTemp = temperatures[0];
    for (let index = 0; index < temperatures.length; index++) {
        if (minTemp > temperatures[index]) {
            minTemp = temperatures[index];
        }
    }
    return minTemp;
}
function getMaxTemp(temperatures) {
    let maxTemp = temperatures[0];
    for (let index = 0; index < temperatures.length; index++) {
        if (maxTemp < temperatures[index]) {
            maxTemp = temperatures[index];
        }
    }
    return maxTemp;
}
function getMediumTemp(temperatures) {
    // 34, 36, 35, 38, 39, 40
    let mediumTemp = 0;
    let summaTemp = 0;
    for (let index = 0; index < temperatures.length; index++) {
        summaTemp = summaTemp + Number(temperatures[index]);
    }
    mediumTemp = summaTemp / temperatures.length;
    return mediumTemp;
}
