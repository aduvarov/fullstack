'use strict';
// Написать функцию которая текущую дату и возвращает массив из двух строк с датами начала и конца недели в формате ISO
// для даты 2023-03-08 возвращает ['2023-03-06', '2023-03-12']

let now = new Date('2023-03-15');
let day = now.getDay();
let result = startAndLastDayWeek(now, day);
console.log(result);

function startAndLastDayWeek(now, day) {
    let result = [];
    let num = 0;
    let num2 = 0;
    for (let index = 1; day > index; day--) {
        num++;
    }
    day = now.getDay();
    for (let index = 7; day < index; day++) {
        num2++;
    }
    now = new Date('2023-03-15');
    now.setDate(now.getDate() - num);
    let startWeek = now.toISOString('YYYY - MM - DD');
    startWeek = startWeek.split('T')[0];
    result.push(startWeek);
    now = new Date('2023-03-15');
    now.setDate(now.getDate() + num2);
    let lastDay = now.toISOString('YYYY - MM - DD');
    lastDay = lastDay.split('T')[0];
    result.push(lastDay);
    return result;
}
