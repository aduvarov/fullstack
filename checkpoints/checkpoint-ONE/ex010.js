'use strict';

// Написать функцию принимающую (объём в см кубических, массу тела в граммах) и возвращающую плотность этого материала

let m = 5000;
let v = 50;

function density(m, v) {
    let p = m / v;
    return p;
}
