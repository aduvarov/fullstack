'use strict';

//Одноклеточная амеба каждые 3 часа делится на 2 клетки.
// Определить, сколько клеток будет через 3,6,9,12,15,18,21,24 часа, если
// первоначально была одна амеба.
// Ответ в виде объекта.

let cage = 1;
let amoebas = [];
for (let count = 3; count <= 24; count += 3) {
    cage = cage * 2;
    amoebas.push(cage);
}
console.log(amoebas);
