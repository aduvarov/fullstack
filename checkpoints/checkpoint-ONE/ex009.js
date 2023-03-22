'use strict';

//Написать функцию принимающую радиус окружности и возвращающую длину окружности и площадь круга в виде объекта.

let radius = 5;

function circleLengthandArea(radius) {
    let pi = Math.PI.toFixed(2);
    let l = 2 * pi * radius;
    let s = pi * radius ** 2;
    return { circleLength: l.toFixed(1), circleArea: s.toFixed(1) };
}
