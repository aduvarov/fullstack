'use strict';

//ex046:
// Известны площади круга и равностороннего треугольни-
// ка. Определить:
// а) уместится ли круг в треугольнике?
// б) уместится ли треугольник в круге?
let circleS = 78.5;
let triangleS = 16;

function areaCircleAndSquare(triangleS, circleS) {
    let pi = Math.PI.toFixed(2);
    let radiusCircle = Math.trunc(Math.sqrt(circleS / pi));
    let sideTriangle = Math.trunc(Math.sqrt((4 * triangleS) / Math.sqrt(3)));
    let radiusTriangle = sideTriangle / Math.sqrt(3);
    if (radiusCircle >= (radiusTriangle * Math.sqrt(3)) / 3) {
        console.log('triangle in circle: true');
    } else if (radiusCircle <= (radiusTriangle * Math.sqrt(3)) / 6) {
        console.log('circle in triangle: true');
    } else {
        console.log('false');
    }
}
