'use strict';

//Даны вещественные положительные числа a, b, c, x, y. Выяснить, пройдет ли кирпич с ребрами a, b, c в прямоугольное отверстие со сторонами x и y. Просовывать кирпич в отверстие разрешается только так, чтобы каждое из его ребер было параллельно или перпендикулярно каждой из сторон отверстия.

let brickL = 30;
let brickW = 30;
let brickH = 30;

let holeW = 30;
let holeL = 55;

if (brickW <= holeW && brickH <= holeL) {
    console.log('залез');
} else if (brickW <= holeL && brickL <= holeL) {
    console.log('залез');
} else if (brickH <= holeL && brickL <= holeW) {
    console.log('залез');
} else {
    console.log('Не залез');
}
