'use strict';

let dice = document.querySelector('.controller__dice-btn');
let stopPlay = document.querySelector('.controller__stop');

let winner = document.querySelector('.wrapper__winner');
let scoresPlayer1 = document.querySelector('.scores__player1');
let scoresPlayer2 = document.querySelector('.scores__player2');
let closeMd = document.querySelector('.wrapper__close');
let modalwindow = document.querySelector('.modalwindow');

let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let totalScore1 = document.querySelector('.player1__total-score');
let totalScore2 = document.querySelector('.player2__total-score');
let score1 = document.querySelector('.player1__current-score');
let score2 = document.querySelector('.player2__current-score');
let newGame = document.querySelector('.footer');
let cubeBoard = document.querySelector('.controller__wrapper');
let cube = document.querySelector('.controller__dice-item');

let totalScore = [100, 100];
let score = [0, 0];
let resultDice = 0;
let player = 0;

cubeBoard.addEventListener('click', () => {
    if (totalScore1.innerHTML < 0) {
        totalScore1.innerHTML = 0;
    }
    if (totalScore2 < 0) {
        totalScore2.innerHTML = 0;
    }
    if (player === 0) {
        player2.classList.add('blur');
        player1.classList.remove('blur');
    } else {
        player1.classList.add('blur');
        player2.classList.remove('blur');
    }
    resultDice = randomInteger(1, 6);
    cube.innerHTML = resultDice;
    if (resultDice === 1) {
        if (player === 0 && totalScore[player] !== 0) {
            score1.innerHTML = 0;
            score[player] = 0;
        } else if (player === 1 && totalScore[player] !== 0) {
            score2.innerHTML = 0;
            score[player] = 0;
        }
        player === 1 ? (player = 0) : (player = 1);
    } else {
        score[player] += resultDice;
        if (player === 0 && totalScore[player] !== 0) {
            score1.innerHTML = score[player];
        } else if (player === 1 && totalScore[player] !== 0) {
            score2.innerHTML = score[player];
        }
    }
});

stopPlay.addEventListener('click', () => {
    if (player === 0) {
        if (totalScore[player] < score[player]) {
            totalScore[player] = 0;
            winner.innerHTML += ' Player1';
            scoresPlayer1.innerHTML += ` ${totalScore[0]}`;
            scoresPlayer2.innerHTML += ` ${totalScore[1]}`;
            modalwindow.classList.remove('vanish');
            totalScore1.innerHTML = totalScore[player];
            cubeBoard.removeEventListener('click', cubeBoard, false);
        } else {
            totalScore[player] -= score[player];
            totalScore1.innerHTML = totalScore[player];
        }
        score[player] = 0;
        score1.innerHTML = score[player];
    } else {
        if (totalScore[player] < score[player]) {
            totalScore[player] = 0;
            winner.innerHTML += ' Player2';
            scoresPlayer1.innerHTML += ` ${totalScore[0]}`;
            scoresPlayer2.innerHTML += ` ${totalScore[1]}`;
            modalwindow.classList.remove('vanish');
            totalScore2.innerHTML = totalScore[player];
            cubeBoard.removeEventListener('click', cubeBoard, false);
        } else {
            totalScore[player] -= score[player];
            totalScore2.innerHTML = totalScore[player];
        }
        score2.innerHTML = 0;
        score[player] = 0;
    }
    score[player] = player === 1 ? (player = 0) : (player = 1);
});

newGame.addEventListener('click', () => {
    totalScore = [100, 100];
    totalScore1.innerHTML = totalScore[0];
    totalScore2.innerHTML = totalScore[1];
    score = [0, 0];
    score1.innerHTML = score[0];
    score2.innerHTML = score[1];
    resultDice = 0;
    player = 0;
    player1.classList.remove('blur');
    player2.classList.remove('blur');
});

closeMd.addEventListener('click', () => {
    modalwindow.classList.add('vanish');
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
