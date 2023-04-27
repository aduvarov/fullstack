'use strict';

//Смоделировать 5 этажный дом, с 4мя подъездами, и 3 квартирами на каждом этаже. С помощью функции ex136 заселить
// в каждую квартиру от 1 до 5 человек.
// Вернуть объект содержащий сколько всего жителей живёт в этом доме (number), определить на каком этаже всего дома живёт меньше всего народу (array этажей таких может быть несколько), определить в каких номерах квартир живут одиночки (array) {allResidens: number, minResidentsOnFloor: array, singles: array}

let a = 1;
let b = 5;
function searchFlat(a, b) {
    let residents = [];
    let rnd;
    let summaFloor = [];
    let allResidents = 0;
    let result = {
        allResidents: 0,
        minResidentsOnFloor: [],
        singles: [],
    };
    let flatNum = 1;
    //заселяем жильцов
    for (let entrance = 0; entrance < 4; entrance++) {
        residents[entrance] = [];
        for (let floor = 0; floor < 5; floor++) {
            residents[entrance][floor] = [];
            for (let allFlat = 1; allFlat <= 3; allFlat++) {
                rnd = randomInteger(a, b);
                allResidents = allResidents + rnd;
                residents[entrance][floor].push(rnd);
            }
        }
    }
    result.allResidents = allResidents;

    //Ищем на каком этаже во всём доме живёт меньше всего людей
    residents.forEach(entrance => {
        entrance.forEach((floor, index) => {
            if (summaFloor[index] === undefined) {
                summaFloor[index] = 0;
            }
            summaFloor[index] += floor.reduce((acc, residents) => (acc += residents), 0);
        });
    });
    let min = Math.min(...summaFloor);
    for (let i = 0; i < 5; i++) {
        if (summaFloor[i] === min) {
            result.minResidentsOnFloor.push(i + 1);
        }
    }

    //    номера квартир где живут одиночки
    for (let entrance = 0; entrance < 4; entrance++) {
        for (let floor = 0; floor < 5; floor++) {
            for (let flat = 0; flat < 3; flat++) {
                if (residents[entrance][floor][flat] === 1) {
                    result.singles.push(flatNum);
                }
                flatNum++;
            }
        }
    }
    return result;
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
