'use strict';
//Даны радиус круга и сторона квадрата. У какой фигуры площадь больше?
// Функция принимает два параметра в одинаковых единицах измерения (circleRadius, squareSide) и возвращает объект с двумя полями. одно поле название фигуы (круг или квадрат) второе площадь.

let circleRadius = 78.5;
let squareSide = 16;

function areaCircleAndSquare(squareSide, circleRadius) {
    let pi = Math.PI.toFixed(2);
    let sCircle = pi * circleRadius ** 2;
    let sSquare = squareSide ** 2;
    if (sCircle > sSquare) {
        return { figure: 'Circle', area: sCircle.toFixed(1) };
    } else {
        return { figure: 'Square', area: sSquare.toFixed(1) };
    }
}
