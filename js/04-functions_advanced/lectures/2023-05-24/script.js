'use strict';
let level = 1;
let next = 1;
let timerStart = 10;
let timerID;

let timer = document.querySelector('.timer__span');
let levelHeader = document.querySelector('#level');
let table = document.querySelector('#table');
let colors = ['blue', 'yellow', 'green', 'red', 'black'];
let sizes = ['medium', 'medium2', 'small', 'small2', 'big', 'big2'];
let resultStr = '';

table.addEventListener('click', startGame);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function startGame(event) {
    console.log(event.target);
    console.log(event.target.innerText);
    if (next < level ** 2) {
        event.target.innerText;
        if (+event.target.innerText === next) {
            next++;
            event.target.classList.add('td_red');
        } else {
            alert('Вы ошиблись начинаем уровень сначала');
            renderTable();
            next = 1;
        }
    } else {
        next = 1;
        level++;
        timer.innerText = level ** 2 * 3;
        levelHeader.innerText = `Уровень: ${level}`;
        renderTable();
    }
}

function renderTable() {
    clearInterval(timerID);
    timerStart = level ** 2 * 3;
    let resultStr = '';
    let numbers = [];
    let rnd = 0;
    while (numbers.length < level ** 2) {
        rnd = randomInteger(1, level ** 2);
        if (!numbers.includes(rnd)) {
            numbers.push(rnd);
        }
    }
    let counter = 0;
    for (let index = 0; index < +level; index++) {
        resultStr += '<tr>';
        for (let index1 = 0; index1 < +level; index1++) {
            resultStr += `<td class="${sizes[randomInteger(0, 5)]} ${colors[randomInteger(0, 4)]}">${
                numbers[counter]
            }</td>`;
            counter++;
        }
        resultStr += '</tr>';
        table.innerHTML = resultStr;
    }
    timerID = setInterval(renderTimer, 1000);
}

function renderTimer() {
    if (timerStart > 0) {
        timerStart--;
        timer.innerText = timerStart;
    } else {
        clearInterval(timerID);
        alert('Время закончилось, начинаем уровень сначала');
        renderTable();
        next = 1;
        if (level === 1) {
            timerStart = 10;
        }
    }
}

timerID = setInterval(renderTimer, 1000);
