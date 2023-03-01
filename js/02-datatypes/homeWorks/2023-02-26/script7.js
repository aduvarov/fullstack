'use strict';

//Напишите программу анализа значений температуры больного за сутки: определите минимальное и максимальное значение, среднее арифметическое. Замеры температуры производятся шесть раз в сутки и результаты вводятся с клавиатуры через prompt в массив temperatures. Программа должна отслеживать неправильный ввод температуры. Например ниже 34 или выше 43 градусов. Или любые ошибочные данные должны быть перезапрошены. Если пользователь нажмёт отмена при вводе температуры программа должна завершить работу. Выводы через document.write (6:00, 10:00, 14:00, 18:00, 22:00, 02:00,)
let temp = [];
let temp1 = [];
for (let index = 0; index < 6; index++) {
    temp1 = prompt(`Введите температуру`);
    if (temp1[index] === null) {
        document.write(false);
    } else if (temp1[index] < 34) {
        temp1 = prompt(`Введите температуру заного`);
    } else if (temp1[index] > 43) {
        temp1 = prompt(`Введите температуру заного`);
    }
    temp.push(temp1);
}

console.log(temp);
let maxtemp = 0;
let mintemp = temp[1];
let medium = 0;
let result = temperatures(temp);

function temperatures(temp) {
    for (let index = 0; index < temp.length; index++) {
        if (temp[index] > maxtemp) {
            maxtemp = temp[index];
        }
        if (temp[index] < mintemp) {
            mintemp = temp[index];
        }
    }
    for (let index = 0; index < temp.length; index++) {
        medium = medium + Number(temp[index]);
    }
    medium = Math.trunc(medium / temp.length);
    return document.write(
        'Самая большая температура ' +
            maxtemp +
            '<br>' +
            'Минимальная температура ' +
            mintemp +
            '<br>' +
            'Средняя температура ' +
            medium
    );
}
