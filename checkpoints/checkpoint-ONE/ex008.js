'use strict';

//Написать функцию принимающую длину ребра куба и возвращающую объем куба и площадь его боковой поверхности.

let rib = 3;

function volumeAndArea(rib) {
    let volume = rib * 3;
    let area = 4 * rib ** 2;
    return `объем куба: ${volume}, площадь боковой поверхности: ${area}`;
}
