'use strict';

let table = document.querySelector('.container__table');
let cell = document.querySelectorAll('.cell');
console.log('cell: ', cell);
let arr = [];
table.addEventListener('click', event => {
    let td = event.target;
    let cellArr = Array.from(cell);
    let indexInArr = cellArr.indexOf(td);
    if (!arr.includes(indexInArr)) {
        if (indexInArr > 5) {
            if (!arr.includes(indexInArr - 5)) {
                arr.push(indexInArr - 5);
            }
            if (!arr.includes(indexInArr + 5)) {
                arr.push(indexInArr + 5);
            }
        } else {
            if (!arr.includes(indexInArr + 5)) {
                arr.push(indexInArr + 5);
            }
        }
        if (indexInArr > cell.length - 5) {
            if (!arr.includes(indexInArr - 5)) {
                arr.push(indexInArr - 5);
            }
        } else {
            if (!arr.includes(indexInArr - 5)) {
                arr.push(indexInArr - 5);
            }
            if (!arr.includes(indexInArr + 5)) {
                arr.push(indexInArr + 5);
            }
        }
    }
    if (arr.includes(indexInArr)) {
        td.bgColor = '';
    } else {
        td.bgColor = 'red';
    }
});
