'use strict';

// Автобусные билеты в рулоне пронумерованы от 000001 до 999999.
// Составить функцию, возвращающую объект с количеством и номерами всех счастливых билетов (массив) в некотором диапазоне (если передано start и end в функцию) или во всём рулоне если аргументов небыло.
// Примечание: Счастливым считать тот билет, у которого сумма первых трех цифр равна сумме трех последних.
// например: getLucky('011000', '011005'); // {total: 1, tickets: ['011002']}

let startTicket = 100000;
let endTicket = 150000;

function luckyTicket(start, end) {
    if (start === undefined) {
        start = '000001';
    }
    if (end === undefined) {
        end = '999999';
    }
    let result = [];
    for (let index = Number(start); index <= Number(end); index++) {
        let ticket = String(index).padStart(6, 0);
        if (+ticket[0] + +ticket[1] + +ticket[2] === +ticket[3] + +ticket[4] + +ticket[5]) {
            result.push(ticket);
        }
    }
    return { total: result.length, tickets: result };
}
console.log(luckyTicket(startTicket, endTicket));
