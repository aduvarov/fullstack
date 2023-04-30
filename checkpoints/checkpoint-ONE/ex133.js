'use strict';

//Смоделировать выбор «наугад» одной карты из полно-
// го набора игральных карт, включающего четыре масти («пики»,
// «трефы», «бубны» и «червы») и по 9 достоинств карт в каждой
// масти («6», «7», «8», «9», «10», «валет», «дама», «король», «туз»).
// Вывести название этой карты в виде, аналогичном следующим:
// «Выбрана дама пик», «Выбрана шестерка бубен» и т. п.

function randomCard() {
    let cardSuit = randomInteger(1, 4);
    let cardValue = randomInteger(6, 14);

    switch (cardSuit) {
        case 1:
            cardSuit = 'пики';
            break;
        case 2:
            cardSuit = 'трефа';
            break;
        case 3:
            cardSuit = 'бубна';
            break;
        case 4:
            cardSuit = 'черви';
            break;
    }

    switch (cardValue) {
        case 6:
            cardValue = 'шесть';
            break;
        case 7:
            cardValue = 'семь';
            break;
        case 8:
            cardValue = 'восемь';
            break;
        case 9:
            cardValue = 'девять';
            break;
        case 10:
            cardValue = 'десять';
            break;
        case 11:
            cardValue = 'валет';
            break;
        case 12:
            cardValue = 'дама';
            break;
        case 13:
            cardValue = 'король';
            break;
        case 14:
            cardValue = 'туз';
            break;
    }
    return `Выбрана  ${cardValue} ${cardSuit}`;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
