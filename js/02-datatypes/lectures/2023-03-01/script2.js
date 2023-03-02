'use strict';

//Напишите программу анализа значений температуры больного за сутки: определите минимальное и максимальное значение, среднее арифметическое. Замеры температуры производятся шесть раз в сутки и результаты вводятся с клавиатуры через prompt в массив temperatures. Программа должна отслеживать неправильный ввод температуры. Например ниже 34 или выше 43 градусов. Или любые ошибочные данные должны быть перезапрошены. Если пользователь нажмёт отмена при вводе температуры программа должна завершить работу. Выводы через document.write (6:00, 10:00, 14:00, 18:00, 22:00, 02:00,)

// 1. Запросить у пользователя температуру 6 раз. Если ошибётся то перезапросить или выйти если нажмёт отмена
// 2. Произвести расчёты
// 3. Вывести результаты

let temperatures = [];
let minTemp;
let mediumTemp;
let maxTemp;
let result = getTemp(temperatures);

if (result !== null) {
    minTemp = getMinTemp(result).toFixed(1);
    mediumTemp = getMediumTemp(result).toFixed(1);
    maxTemp = getMaxTemp(result).toFixed(1);
    document.write(`
    Максимальная температура: ${maxTemp}<br> 
    Минимальная температура: ${minTemp}<br>
    Средняя температура: ${mediumTemp}`);
}

//exit
function getTemp(temperatures) {
    let count = 6;
    while (count > 0) {
        let temp = prompt('Введите температуру');
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
