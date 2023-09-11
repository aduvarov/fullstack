'use strict';
let btn = document.querySelector('#btn');
let table = document.querySelector('.container__table');
let cell = document.querySelectorAll('.cell');

let arr = [];
let index = 0;
table.addEventListener('click', event => {
    let td = event.target;
    let cellArr = Array.from(cell);
    let indexInArr = cellArr.indexOf(td);

    if (index < 2) {
        td.bgColor = 'yellow';
    }
    arr.push(indexInArr);
    console.log(arr);
    if (arr[0] < arr[1] && index === 1) {
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            cellArr[i].bgColor = 'red';
        }
    } else if (arr[0] > arr[1] && index === 1) {
        for (let i = arr[1] + 1; i < arr[0]; i++) {
            cellArr[i].bgColor = 'red';
        }
    }
    index++;
    if (arr.length > 1) arr = [];
});

btn.addEventListener('click', () => {
    cell.forEach(e => {
        e.bgColor = '';
    });
    index = 0;
});
