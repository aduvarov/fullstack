'use strict';
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');

let cell = document.querySelectorAll('.cell');

let arr = [];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

btn1.addEventListener('click', () => {
    cell.forEach(e => {
        e.bgColor = '';
    });
});
btn.addEventListener('click', () => {
    let cellArr = Array.from(cell);

    setInterval(() => {
        if (cellArr.length > 0) {
            let i = randomInteger(0, cellArr.length - 1);
            cellArr[i].bgColor = 'red';
            cellArr.splice(i, 1);
            console.log(cellArr);
        } else {
            clearInterval();
        }
    }, 1000);
});
