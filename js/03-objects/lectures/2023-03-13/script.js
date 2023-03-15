'use strict';
//Написать функцию которая принимает заданную дату и возвращает массив из двух строк с датами начала и конца недели в формате ISO
// для даты 2023-03-08 возвращает ['2023-03-06', '2023-03-12']

let date = '2023-01-31';
let result = startAndLastDayWeek(date);
console.log(result);

function startAndLastDayWeek(date) {
    let dateObj = new Date(date);
    let dayOfMonth = dateObj.getDate();
    let day = dateObj.getDay();
    let delta = 0;
    let monday;
    let sunday;

    day = day === 0 ? 7 : day;
    while (day > 1) {
        delta++;
        day--;
    }
    dateObj.setDate(dayOfMonth - delta);
    monday = dateObj.toISOString().split('T')[0];
    dayOfMonth = dateObj.getDate();
    dateObj.setDate(dayOfMonth + 6);
    sunday = dateObj.toISOString().split('T')[0];
    return [monday, sunday];
}
