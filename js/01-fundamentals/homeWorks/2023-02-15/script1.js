'use strict';

let ms = +prompt('Введите количество милисекунд');
let result = calcMs(ms);

document.write(result);

function calcMs(ms) {
    let hour = Math.trunc(ms / (60 * 60 * 1000));
    let hour2 = ms - hour * 60 * 60 * 1000;
    let hour3 = hour * 60 * 60 * 1000;
    let min = Math.trunc(hour2 / (60 * 1000));
    let min2 = ms - (min * 60 * 1000 + hour3);
    let sec = Math.trunc(min2 / 1000);
    let result = hour + ' hour ' + min + ' minuts ' + sec + ' seconds ';
    return result;
}
