'use strict';

// ex044:
// Даны радиус круга и сторона квадрата. У какой фигуры площадь больше?

let circleRadius = 5.5;
let squareSide = 4;

function areaCircleAndSquare(squareSide, circleRadius) {
    let pi = Math.PI.toFixed(2);
    let sCircle = pi * circleRadius ** 2;
    let sSquare = squareSide ** 2;
    if (sCircle > sSquare) {
        return console.log(sCircle > sSquare);
    } else {
        return console.log(sSquare > sCircle);
    }
}
