'use strict';

let table = document.querySelector('.container__table');
let cell = document.querySelectorAll('.cell');
console.log('cell: ', cell);
let arr = [];
table.addEventListener('click', event => {
    let td = event.target;
    let cellArr = Array.from(cell);
    let indexInArr = cellArr.indexOf(td);
    let i = event.target.cellIndex;
    let tr = td.parentNode;
    if (!arr.includes(indexInArr)) {
        if (i > 0) {
            arr.push(indexInArr - 1);
        }

        if (i < tr.children.length - 1) {
            arr.push(indexInArr + 1);
        }
        if (i !== 0) {
            arr.push(indexInArr - 6);
        }
        arr.push(indexInArr - 5);
        arr.push(indexInArr + 5);
        if (i < tr.children.length - 1) {
            arr.push(indexInArr + 6);
            arr.push(indexInArr - 4);
        }
        if (i > 0) {
            arr.push(indexInArr + 4);
        }
    }
    if (arr.includes(indexInArr)) {
        td.bgColor = '';
    } else {
        td.bgColor = 'red';
    }
    console.log(arr);
});
