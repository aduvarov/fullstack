'use strict';

//Написать функцию принимающую (внешний радиус, внутренний радиус) и возвращающую площадь кольца.
//S=π(R2−r2)

let outsideR = 7;
let internalR = 4;

function sCircle(c1, c2) {
    let s = Math.PI.toFixed(2) * (c1 * 2 - c2 * 2);
    return s;
}
