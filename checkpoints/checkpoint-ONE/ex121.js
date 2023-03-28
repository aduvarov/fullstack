'use strict';

//Дана последовательность из m единиц и нулей (например 101001000100001).
// Найти самый длинный отрезок этой последовательности состоящей из одних нулей

let m = 101001000100001;

function longestStretch(m) {
    let count = 0;
    let counter = [];
    for (let index = 0; index < m.toString().length; index++) {
        if ((Number(m.toString()[index]) === 0 && Number(m.toString()[index + 1])) === 0) {
            count++;
        } else {
            counter.push(count + 1);
            count = 0;
        }
    }
    let best = 0;
    for (let index = 0; index < counter.length; index++) {
        if (counter[index] < counter[index + 1]) {
            best = counter[index + 1];
        }
    }
    return best;
}
