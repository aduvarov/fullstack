'use strict';

//Смоделировать игру со слот машиной.
// Необходимо подсчитать кол-во запусков машины до получения выигрышной комбинации: ['банан','банан','банан'];
// Ограничить кол-во запусков одним миллионом.
// result number или null (если за миллион запусков так и не выпадет выигрышная комбинация);

let bandit = {
    cylinder1: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
    cylinder2: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
    cylinder3: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
};
function roll(bandit) {
    let result = [];
    let rnd;
    let fruit;
    let scrolling = 0;
    for (let index = 1; index <= 1000000; index++) {
        scrolling++;
        rnd = randomInteger(1, 8);
        fruit = bandit.cylinder1[rnd];
        result.push(fruit);
        rnd = randomInteger(1, 8);
        fruit = bandit.cylinder1[rnd];
        result.push(fruit);
        rnd = randomInteger(1, 8);
        fruit = bandit.cylinder1[rnd];
        result.push(fruit);

        if (result.length === 3) {
            if (result[0] === result[1] && result[1] === result[2]) {
                return `${result} ${scrolling}`;
            } else {
                result = [];
            }
        }
    }
    return null;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
