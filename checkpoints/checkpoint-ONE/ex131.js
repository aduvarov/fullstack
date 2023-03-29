'use strict';

//Разработать функцию моделирующую игру, в которой два кубика бросают два участника или больше, после чего определяется, кто из них
// выиграл (у кого выплало больше очков) или имеет место ничья. Если у игрока выподает дубль, он получает право кинуть кубики ещё раз. Функция должна принимать кол-во участников и кол-во бросков. Возвращать объект с общими результатами.

let player1 = 0;
let player2 = 0;
let dice = 2;

function dropoutRate(player1, player2, dice) {
    let rnd = 0;
    let rnd1 = 0;
    for (let index = 0; index < dice; index++) {
        rnd = randomInteger(1, 6);
        rnd1 = randomInteger(1, 6);
        player1 += rnd + rnd1;
        if (rnd === rnd1) {
            rnd = randomInteger(1, 6);
            rnd1 = randomInteger(1, 6);
            player1 += rnd + rnd1;
        }
    }
    for (let index = 0; index < dice; index++) {
        rnd = randomInteger(1, 6);
        rnd1 = randomInteger(1, 6);
        player2 += rnd + rnd1;
        if (rnd === rnd1) {
            rnd = randomInteger(1, 6);
            rnd1 = randomInteger(1, 6);
            player2 += rnd + rnd1;
        }
    }
    if (player1 > player2) {
        console.log('player1 win');
    }
    if (player1 < player2) {
        console.log('player2 win');
    } else {
        console.log('ничья');
    }
    return { player1: player1, player2: player2 };
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
