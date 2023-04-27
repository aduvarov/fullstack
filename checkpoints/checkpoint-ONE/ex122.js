'use strict';

//Три группы студентов, в каждой из которых по 20 чело-
// век, в сессию сдавали по три экзамена. Определить лучшую по
// среднему баллу группу.
// inut: трёхмерный массив.
// result: 0 или 1 или 2

let groups = [];
let summa = [];
let points = 0;
let rnd = 0;
let nodPoint = [];
for (let groupSt = 0; groupSt < 3; groupSt++) {
    groups[groupSt] = [];
    for (let student = 0; student < 20; student++) {
        groups[groupSt][student] = [];
        for (let exam = 0; exam < 3; exam++) {
            rnd = groups[groupSt][student][exam] = randomInteger(1, 5);
            points += rnd;
        }
    }
    summa.push(points);
    points = 0;
}
let nod = 0;
for (let count = 0; count < 3; count++) {
    nod = summa[count] / 20;
    nodPoint.push(nod);
}
if (nodPoint[0] > nodPoint[1] && nodPoint[0] > nodPoint[2]) {
    console.log(1);
} else if (nodPoint[1] > nodPoint[0] && nodPoint[1] > nodPoint[2]) {
    console.log(2);
} else if (nodPoint[2] > nodPoint[0] && nodPoint[2] > nodPoint[1]) {
    console.log(3);
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
