'use strict';

//Написать функцию принимающую (кол-во жителей в государстве, площадь территории государства). Возвращающую плотность населения в этом государстве.

let people = 9340000;
let sCountry = 207628;

function populationDensity(people, sCountry) {
    let p = people / sCountry;
    return p;
}
