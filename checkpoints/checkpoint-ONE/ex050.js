'use strict';

//Дано целое число n. Вывести на экран следующее за ним четное число.

let m = 24;

function numEven(m) {
    let n = m + 1;
    if (n % 2 === 0) {
        return n;
    } else {
        n = n + 1;
        return n;
    }
}
