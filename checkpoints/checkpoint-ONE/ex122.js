'use strict';

//Три группы студентов, в каждой из которых по 20 чело-
// век, в сессию сдавали по три экзамена. Определить лучшую по
// среднему баллу группу.
// inut: трёхмерный массив.
// result: 0 или 1 или 2

let group = [
    [3, 4, 5, 3, 2, 2, 5, 5, 3, 4, 5, 3, 2, 2, 3, 5, 2, 2, 5, 3],
    [3, 2, 5, 3, 2, 2, 5, 4, 3, 4, 5, 3, 2, 4, 5, 5, 2, 4, 5, 4],
    [5, 4, 5, 3, 2, 2, 3, 5, 3, 4, 5, 3, 3, 2, 5, 4, 2, 3, 3, 5],
];
let summa1 = 0;
let summa2 = 0;
let summa3 = 0;
let nod1 = 0;
let nod2 = 0;
let nod3 = 0;
for (let index = 0; index < group[0].length; index++) {
    summa1 = summa1 + group[0][index];
    summa2 = summa2 + group[1][index];
    summa3 = summa3 + group[2][index];
}
nod1 = summa1 / 20;
nod2 = summa2 / 20;
nod3 = summa3 / 20;
if (nod1 > nod2 && nod1 > nod3) {
    console.log(1);
} else if (nod2 > nod1 && nod2 > nod3) {
    console.log(2);
} else if (nod3 > nod1 && nod3 > nod2) {
    console.log(3);
}
