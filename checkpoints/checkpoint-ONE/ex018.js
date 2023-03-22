'use strict';

//Написать функцию принимающую расстояние в сантиметрах и возвращаующая число полных целых метров в нём.

let distance = 1500;

function distanceMeter(distance) {
    let distanceM = distance / 100;
    return Math.trunc(distanceM);
}
