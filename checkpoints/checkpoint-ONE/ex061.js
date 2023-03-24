'use strict';

//Даны вещественные положительные числа a, b, c, x, y. Выяснить, пройдет ли кирпич с ребрами a, b, c в прямоугольное отверстие со сторонами x и y. Просовывать кирпич в отверстие разрешается только так, чтобы каждое из его ребер было параллельно или перпендикулярно каждой из сторон отверстия.

let brickW = 15;
let brickL = 13;
let brickH = 14;
let holeW = 30;
let holeL = 20;

if (holeW - brickW >= 0 && holeL - brickH >= 0) {
    return true;
} else if (holeW - brickL >= 0 && holeL - brickH >= 0) {
    return true;
} else {
    return false;
}
