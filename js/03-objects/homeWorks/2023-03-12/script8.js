'use strict';
//Написать функцию которая текущую дату и возвращает массив из двух строк с датами начала и конца недели в формате ISO
// для даты 2023-03-08 возвращает ['2023-03-06', '2023-03-12']
let now = new Date('2023-12-31');
let now2 = now;
let day = now.getDay();
let result = startAndLastDayWeek(now, day);
console.log(result);

function startAndLastDayWeek(now, day) {
    let result = [];
    let num = 0;
    for (let index = 1; day > index; day--) {
        num++;
    }
    if (num === 0) {
        now.setDate(now.getDate() - 6);
        let lastDay = now.toISOString().split('T')[0];
        result.push(lastDay);
    }
    if (num !== 0) {
        now.setDate(now.getDate() - num);
        let startWeek = now.toISOString().split('T')[0];
        result.push(startWeek);
    }
    if (num === 0) {
        now.setDate(now.getDate() + 6);
        let lastDay = now.toISOString().split('T')[0];
        result.push(lastDay);
    }
    if (num !== 0) {
        now.setDate(now.getDate() + 6);
        let lastDay = now.toISOString().split('T')[0];
        result.push(lastDay);
    }
    return result;
}
