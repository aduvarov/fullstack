'use strict';

//Разработать программу, которая моделирует выбор
// каждым из двух играющих «наугад» по одной карте из полно-
// го набора игральных карт, включающего четыре масти («пики»,
// «трефы», «бубны» и «червы») и по 9 достоинств карт в каждой
// масти («шестерка», «семерка», «восьмерка», «девятка», «десятка»,
// «валет», «дама», «король», «туз») и определение того из участни-
// ков игры, у которого выбранная карта «старше». При этом ус-
// ловимся, что приведенный выше перечень мастей и карт одной
// масти дан в порядке увеличения их «старшинства» (например,
// любая карта масти «бубны» старше любой карты масти «пики»,
// а «валет червей» старше «десятки червей»).

function randomCard() {
    let cardSuit = randomInteger(1, 4);
    let cardValue = randomInteger(6, 14);
    let cardSuit1 = randomInteger(1, 4);
    let cardValue1 = randomInteger(6, 14);
    let firstCardSuit = cardSuit;
    let secondCardSuit = cardSuit1;
    let firstCardValue = cardValue;
    let secondCardValue = cardValue1;

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
    switch (cardSuit1) {
        case 1:
            cardSuit1 = 'пики';
            break;
        case 2:
            cardSuit1 = 'трефа';
            break;
        case 3:
            cardSuit1 = 'бубна';
            break;
        case 4:
            cardSuit1 = 'черви';
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
    switch (cardValue1) {
        case 6:
            cardValue1 = 'шесть';
            break;
        case 7:
            cardValue1 = 'семь';
            break;
        case 8:
            cardValue1 = 'восемь';
            break;
        case 9:
            cardValue1 = 'девять';
            break;
        case 10:
            cardValue1 = 'десять';
            break;
        case 11:
            cardValue1 = 'валет';
            break;
        case 12:
            cardValue1 = 'дама';
            break;
        case 13:
            cardValue1 = 'король';
            break;
        case 14:
            cardValue1 = 'туз';
            break;
    }
    if (firstCardSuit > secondCardSuit) {
        return `Игрок 1:${cardSuit} ${cardValue} Игрок 2: ${cardSuit1} ${cardValue1} (Игрок 1 выйграл)`;
    } else if (firstCardSuit < secondCardSuit) {
        return `Игрок 1:${cardSuit} ${cardValue} Игрок 2: ${cardSuit1} ${cardValue1} (Игрок 2 выйграл)`;
    } else {
        if (firstCardValue > secondCardValue) {
            return `Игрок 1:${cardSuit} ${cardValue} Игрок 2: ${cardSuit1} ${cardValue1} (Игрок 1 выйграл)`;
        } else if (firstCardValue < secondCardValue) {
            return `Игрок 1:${cardSuit} ${cardValue} Игрок 2: ${cardSuit1} ${cardValue1} (Игрок 2 выйграл)`;
        }
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
