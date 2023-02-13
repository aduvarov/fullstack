'use strict';

let hour = 2; //+prompt('Введите количество часов');
let min = 32; //+prompt('Введите количество минут');
let sec = 40; //+prompt('Введите количество секунд');

let result = calcMs(hour, min, sec);

document.write(result);

function calcMs(hour, min, sec) {
    // 1 sec = 1000ms
    // 2 sec = 2000ms
    // 60 sec = 60000ms
    // 50 sec = 50 * 1000ms;
    // 3min =  3 * 60 * 1000
    // 32min = 32 * 60 * 1000
    // 1h = 1 * 60 * 60 * 1000;
    // 2h = 2 * 60 * 60 * 1000;
    let result = hour * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000;
    return result;
}
