'use strict';

//В подъезде № 1 пятиэтажного жилого дома 15 квартир.
// Определить, на каком этаже этого подъезда находится квартира с заданным номером.

let flat = 12;

function searchFloor(flat) {
    let number = 0;
    for (let floor = 1; floor <= 5; floor++) {
        for (let allFlat = 1; allFlat <= 3; allFlat++) {
            number = number + 1;
            if (number === flat) {
                return floor;
            }
        }
    }
}
