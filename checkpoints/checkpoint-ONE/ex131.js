'use strict';

//Разработать функцию моделирующую игру, в которой два кубика бросают два участника или больше, после чего определяется, кто из них
// выиграл (у кого выплало больше очков) или имеет место ничья. Если у игрока выподает дубль, он получает право кинуть кубики ещё раз. Функция должна принимать кол-во участников и кол-во бросков. Возвращать объект с общими результатами.

let players = 2;
let dice = 10;

function dropoutRate(players, dice) {
    let playersResults = []; //
    for (let index = 0; index < players; index++) {
        playersResults.push([]);
    }
    let cube1 = 0;
    let cube2 = 0;
    for (let index = 0; index < players; index++) {
        for (let count = 0; count < dice; count++) {
            cube1 = randomCube(); //3
            cube2 = randomCube(); //3
            playersResults[index].push(cube1 + cube2);
            if (cube1 === cube2) {
                count--;
            }
        }
    }
    let results = {};
    let sum = 0;
    for (let index = 0; index < playersResults.length; index++) {
        for (let result of playersResults[index]) {
            sum = sum + result;
        }
        results[index] = sum;
        sum = 0;
    }

    let x = Object.values(results);
    let winner = Math.max(...x);
    for (let key in results) {
        if (results[key] === winner) {
            results[winner] = key;
        }
    }
    return { winner: results[winner], players: playersResults };
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randomCube() {
    let rnd = 0;
    rnd = randomInteger(1, 6);
    if (rnd === 1) {
        return 1;
    } else if (rnd === 2) {
        return 2;
    } else if (rnd === 3) {
        return 3;
    } else if (rnd === 4) {
        return 4;
    } else if (rnd === 5) {
        return 5;
    } else if (rnd === 6) {
        return 6;
    }
}
