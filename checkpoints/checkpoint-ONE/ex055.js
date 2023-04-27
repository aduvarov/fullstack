'use strict';
//Имеется стол прямоугольной формы с размерами a×b (a и b – целые числа, a > b). В каком случае на столе можно разместить большее количество картонных прямоугольников с размерами c×d (c и d – целые числа, c > d) при размещении их длинной стороной вдоль длинной стороны стола или вдоль короткой? Прямоугольники не должны лежать один на другом и не должны свисать со стола.
//  // Результат строка 'Лучше разместить бумагу длинной стороной вдоль длинной сторны стола' или тому подобная

let tableLenght = 100; // 100
let tableWidth = 50; // 50
let paperLength = 30; // 100
let paperWidth = 20; // 60

function paperOnTable(tableLenght, tableWidth, paperLength, paperWidth) {
    if (tableLenght < paperLength) {
        return 'Error: Картон на столе не поместится!';
    }
    if (paperWidth > tableWidth) {
        return 'Error: Картон на столе не поместится!';
    }
    let longLongX = Math.trunc(tableLenght / paperLength); // 3
    let longLongY = Math.trunc(tableWidth / paperWidth); // 3
    let longLongCount = longLongX * longLongY; //9

    let longShortX = Math.trunc(tableLenght / paperWidth); // 5
    let longShortY = Math.trunc(tableWidth / paperLength); // 2
    let longShortCount = longShortX * longShortY; //
    let result = longLongCount > longShortCount ? 'длинной' : 'короткой';
    return `Лучше разместить бумагу ${result} стороной вдоль длинной сторны стола`;
}
