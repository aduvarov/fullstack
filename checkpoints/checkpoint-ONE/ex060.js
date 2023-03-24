'use strict';

//Вася пытается высунуть голову в прямоугольную форточку размерами a и b см. Приняв условно, что его голова – круглая диаметром d см, определить, сможет ли Вася сделать это. Для прохождения головы в форточку необходим зазор в 1 см с каждой стороны.
// Результат boolean

let sashLength = 60;
let sashWidth = 50;
let headDiameter = 48;

if (sashLength - headDiameter >= 2 && sashWidth - headDiameter >= 2) {
    return true;
} else {
    return false;
}
