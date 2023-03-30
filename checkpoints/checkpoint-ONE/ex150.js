'use strict';

//Смоделировать 5 этажный дом, с 4мя подъездами, и 3 квартирами на каждом этаже. С помощью функции ex136 заселить
// в каждую квартиру от 1 до 5 человек.
// Вернуть объект содержащий сколько всего жителей живёт в этом доме (number), определить на каком этаже всего дома живёт меньше всего народу (array этажей таких может быть несколько), определить в каких номерах квартир живут одиночки (array)

let a = 1;
let b = 5;
function searchFlat(a, b) {
    let residents = [];
    let rnd;
    let summaFloor = [];
    let summa = 0;
    for (let entrance = 1; entrance <= 4; entrance++) {
        for (let floor = 1; floor <= 5; floor++) {
            for (let allFlat = 1; allFlat <= 3; allFlat++) {
                rnd = randomInteger(a, b);
                summa = summa + rnd;
                residents.push(rnd);
            }
            summaFloor.push(summa);
            summa = 0;
        }
    }
    summaFloor.sort(compareNumbers);
    residents.sort(compareNumbers);
    let smallFloor = summaFloor[0];
    for (let index = 0; index < summaFloor.length; index++) {
        if (summaFloor[index] > summaFloor[index + 1]) {
            smallFloor = summaFloor[index + 1];
        }
    }
    let smallFloorLive = [];
    for (let index = 1; index < summaFloor.length; index++) {
        if (summaFloor[index] === smallFloor) {
            smallFloorLive.push(index);
        }
    }
    smallFloorLive.push(smallFloor);
    let allResidents = 0;
    for (let index = 0; index < residents.length; index++) {
        allResidents = allResidents + residents[index];
    }
    let singles = [];
    for (let index = 0; index < residents.length; index++) {
        if (residents[index] === 1) {
            singles.push(index);
        }
    }
    return `Всех жителей:${allResidents} Квартиры одиночкек ${singles} этажи где живет меньше всего людей ${smallFloorLive} `;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compareNumbers(a, b) {
    return a - b;
}
