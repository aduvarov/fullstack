'use strict';

//Даны вещественные положительные числа a, b, c, x, y. Выяснить, пройдет ли кирпич с ребрами a, b, c в прямоугольное отверстие со сторонами x и y. Просовывать кирпич в отверстие разрешается только так, чтобы каждое из его ребер было параллельно или перпендикулярно каждой из сторон отверстия.

let brickW = 15;
let brickL = 13;
let brickH = 14;
let holeW = 30;
let holeL = 20;

if (
    brickW <= holeW &&
    brickL <= holeL &&
    brickL <= holeW &&
    brickW <= holeL &&
    brickW <= holeW &&
    brickH <= holeL &&
    brickH <= holeW &&
    brickW <= holeL &&
    brickH <= holeW &&
    brickL <= holeL &&
    brickL <= holeW &&
    brickH <= holeL
) {
    console.log('Кирпич пройдет в отверстие.');
} else {
    console.log('Кирпич не пройдет в отверстие.');
}
