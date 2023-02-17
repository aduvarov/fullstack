'use strict';

let calcFlat = document.querySelector('.calculator__flat');
let calcLvl = document.querySelector('.calculator__lvl');
let calcEnt = document.querySelector('.calculator__ent');
let calcFlatLvl = document.querySelector('.calculator__flatlvl');
let calcBtn = document.querySelector('.calculator__btn');
let calcAnswer = document.querySelector('.calculator__answer');

calcBtn.addEventListener('click', calculate);

function calculate() {
    let userFlat = calcFlat.value; // 3 квартира
    let totalLevels = calcLvl.value; // 5 этажей
    let totalEntrance = calcEnt.value; // 4 подъезда
    let totalLevelFlats = calcFlatLvl.value; // 3 квартиры на этаж
    let currentEntrance = 0;
    let currentLevel = 0;
    let maxFlats = totalLevels * totalLevelFlats * totalEntrance;
    if (userFlat > maxFlats || userFlat <= 0) {
        calcAnswer.innerHTML = 'Неправильно введена квартира';
        return;
    }

    for (let currentFlat = 1; currentFlat <= userFlat; currentFlat++) {
        if (currentEntrance === 0) {
            currentEntrance++;
        }
        if (currentFlat % totalLevelFlats === 1) {
            currentLevel++;
        }
        if (currentLevel > totalLevels) {
            currentLevel = 1;
            currentEntrance++;
        }
    }

    calcAnswer.innerHTML = 'Подъезд №' + currentEntrance + ' Этаж №' + currentLevel;
    return;
}
