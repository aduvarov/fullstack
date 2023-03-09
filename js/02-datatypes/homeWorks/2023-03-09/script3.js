'use strict';

// Ваша задача, используя методы объекта Date, вывести на экран
// время в формате: час:минута:секунда (пример: 14:23:11)
// При этом, если секунды и минуты попадают в интервал от 0 до 10, они должны выводиться с нулем впереди.

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let second = now.getSeconds();
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (second < 10) {
    second = '0' + second;
}

console.log(`${hour}:${minutes}:${second}`);
