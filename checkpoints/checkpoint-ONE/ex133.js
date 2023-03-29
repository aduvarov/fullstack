'use strict';

//Смоделировать выбор «наугад» одной карты из полно-
// го набора игральных карт, включающего четыре масти («пики»,
// «трефы», «бубны» и «червы») и по 9 достоинств карт в каждой
// масти («6», «7», «8», «9», «10», «валет», «дама», «король», «туз»).
// Вывести название этой карты в виде, аналогичном следующим:
// «Выбрана дама пик», «Выбрана шестерка бубен» и т. п.

function randomCard() {
    let rnd = randomInteger(1, 4);
    let rnd1 = randomInteger(6, 14);

    switch (rnd) {
        case 1:
            rnd = 'пики';
        case 2:
            rnd = 'трефа';
        case 3:
            rnd = 'бубна';
        case 4:
            rnd = 'черви';
    }

    switch (rnd1) {
        case 6:
            rnd1 = 'шесть';
        case 7:
            rnd1 = 'семь';
        case 8:
            rnd1 = 'восемь';
        case 9:
            rnd1 = 'девять';
        case 10:
            rnd1 = 'десять';
        case 11:
            rnd1 = 'валет';
        case 12:
            rnd1 = 'дама';
        case 13:
            rnd1 = 'король';
        case 14:
            rnd1 = 'туз';
    }
    return `Выбрана  ${rnd1} ${rnd}`;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
