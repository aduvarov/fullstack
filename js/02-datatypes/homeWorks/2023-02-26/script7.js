'use strict';

let temp = prompt('Введите температуру после замеров');
let temp1 = temp.split(' ');
let maxtemp = 0;
let mintemp = temp1[1];
let medium = 0;
let result = temperature(temp1);

function temperature(temp1) {
    for (let index = 0; index < temp1.length; index++) {
        if (temp1[index] < 34) {
            return document.write('такой температуры нету');
        }
        if (temp1[index] > 43) {
            return document.write('такой температуры нету');
        }
        for (let index = 0; index < temp1.length; index++) {
            if (temp1[index] > maxtemp) {
                maxtemp = temp1[index];
            }
            if (temp1[index] < mintemp) {
                mintemp = temp1[index];
            }
        }
        for (let index = 0; index < temp1.length; index++) {
            medium = medium + Number(temp1[index]);
        }
        medium = medium / temp1.length;
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
}
