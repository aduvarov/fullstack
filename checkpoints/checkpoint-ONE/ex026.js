'use strict';

//В жилом 9-этажном доме имеется 4 подъезда, на каждом этаже – 6 квартир. Определить:
// 1) в каком подъезде находится квартира с заданным номером;
// 2) на каком этаже этого подъезда она находится;
// 3) какой по счету на этаже является эта квартира, если квар-тира с минимальным номером является первой на этаже.
// Результат вернуть в виде объекта.

let flat = 104;

function searchFlat(flat) {
    let number = 0;
    for (let entrance = 1; entrance <= 4; entrance++) {
        for (let floor = 1; floor <= 9; floor++) {
            for (let allFlat = 1; allFlat <= 6; allFlat++) {
                number = number + 1;
                if (number === flat) {
                }
            }
        }
    }
}
let floorFlat = flat / 6;

return { floor: floor, entrance: entrance, floorFlat: floor };
