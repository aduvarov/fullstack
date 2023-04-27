'use strict';

//ex129:
// Создать функцию кубик. 1-6. Которая случайным образом возвращает результат от 1 до 6.
// При запуске функции 10000 раз вероятность распределения чисел должна стремиться к 16%.
// result number
function randomCube() {
    let rnd = 0;
    rnd = randomInteger(1, 6);
    if (rnd === 1) {
        return 1;
    } else if (rnd === 2) {
        return 2;
    } else if (rnd === 3) {
        return 3;
    } else if (rnd === 4) {
        return 4;
    } else if (rnd === 5) {
        return 5;
    } else if (rnd === 6) {
        return 6;
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
