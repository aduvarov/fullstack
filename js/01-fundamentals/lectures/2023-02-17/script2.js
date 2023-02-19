'use strict';
// Задача написать функцию для поиска ближайшего квадрата числа.
// nearest_sq(n) - где n любое положительное целое число.
// Если n уже идеальное квадрат числа (например n=144, n=81) то и вернуть надо его же.
// Для примера. Если n = 111, то ближайший квадрат числа будет 121, потому что 111 ближе к 121( квадрат 11), чем 100 (квадрат 10)
// Число необходимо бесконечно запрашивать у пользователя пока он не нажмёт кнопку отмена. Результат выводить в браузер в виде:
// Ближайший квадрат к числу 111 будет 121.

// Пример n = 40. Ответ 36
// Пример n = 49. Ответ 49
// Пример n = 5. Ответ 4.
// originN = 200;  squreDown = 196; squreUp = 225;
// deltaDown = originN - squreDown; deltaUp = squreUp - originN;

let n = +prompt('Введите любое положительное число');

let result = nearest_sq(n);
document.write(result);

function nearest_sq(n) {
    let squareDown;
    let squareUp;
    let originN = n;
    let deltaDown;
    let deltaUp;

    if (Number.isInteger(Math.sqrt(n))) {
        return n;
    }

    while (Number.isInteger(Math.sqrt(n)) === false) {
        n--;
    }

    squareDown = n;
    n = originN;

    while (Number.isInteger(Math.sqrt(n)) === false) {
        n++;
    }

    squareUp = n;
    deltaDown = originN - squareDown;
    deltaUp = squareUp - originN;

    if (deltaUp < deltaDown) {
        return squareUp;
    } else {
        return squareDown;
    }
}
