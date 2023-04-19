'use strict';

//ex132:
// Составить программу проверяющую знание таблицы умножения. В ней случайным образом получают два целых числа больших 0 и меньших 10.
// После чего на экран выводится вопрос "Чему равно произведение 4х9?".
// Вопрос выводится 10 раз. Проводится расчёт и вывод на экран в виде таблицы правильные и неправильные ответы. Неправильные ответы должны выводиться в красных ячейках, а правильные в зелёных.

let rnd = 0;
let rnd1 = 0;
let answer;
let trueAns = [];
let falseAns = [];
for (let index = 0; index < 10; index++) {
    rnd = randomInteger(1, 9);
    rnd1 = randomInteger(1, 9);
    answer = +prompt(`Чему равно произведение ${rnd}x${rnd1}`);
    if (rnd * rnd1 === answer) {
        trueAns.push(`${rnd}x${rnd1} = ${answer}`);
    } else {
        falseAns.push(`${rnd}x${rnd1} = ${answer}`);
    }
}

document.write('<table border="1">');
for (let row = 0; row < 10; row++) {
    if (trueAns[row] !== undefined) {
        document.write('<tr>');
        document.write(`<td class="green"> ${trueAns[row]} </td>`);
        document.write('</tr>');
    }
}
for (let row = 0; row < 10; row++) {
    if (falseAns[row] !== undefined) {
        document.write('<tr>');
        document.write(`<td class="red"> ${falseAns[row]} </td>`);
        document.write('</tr>');
    }
}
document.write('</table>');
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
