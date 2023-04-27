'use strict';

// Известны площади круга и квадрата. Определить:
// а) уместится ли круг в квадрате?
// б) уместится ли квадрат в круге?
// Функция принимает два параметра в одинаковых единицах измерения (circleArea, squareArea) и возвращает объект с ключами circleInSquare, squareInCircle и соответствующими значениями true или false

let circleS = 78.5;
let squareS = 16;

function areaCircleAndSquare(squareS, circleS) {
    let pi = Math.PI.toFixed(2);
    let diagonalCircle = Math.trunc((Math.sqrt(circleS) * 2) / pi);
    let diagonalSquare = Math.sqrt(squareS) * 2;
    console.log(diagonalCircle, diagonalSquare);
    if (diagonalCircle > diagonalSquare) {
        return { circleInSquare: false, squareInCircle: true };
    } else {
        return { circleInSquare: true, squareInCircle: false };
    }
}
