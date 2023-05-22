'use strict';

// let x = 5;

// setTimeout(log, 100000, x); // 2

// clearTimeout()

// console.log(x + x); // 1

// x = 6;

// function log(msg) {
//     y = msg++;
//     console.log(y);
// }
// let square = document.querySelector('#square');
// let btnStop = document.querySelector('#stop');
// let btnStart = document.querySelector('#start');

// let pos = 0;

// let y = 5;
// square.style.marginLeft = 0;

// function moveSquare(square) {
//     square.style.marginLeft = parseInt(square.style.marginLeft) + 15 + 'px';
// }

// btnStop.addEventListener('click', () => clearInterval(timerID));
// btnStart.addEventListener('click', () => (timerID = setInterval(moveSquare, 500, square)));

// let timerID = setInterval(moveSquare, 1000, square);

let i = 1;
let makeCounter = () => {
    let counter = 0;
    return function () {
        return counter++;
    };
};

let counter = makeCounter();

setTimeout(function run() {
    alert(counter());
    setTimeout(run, 2000);
}, 2000);
