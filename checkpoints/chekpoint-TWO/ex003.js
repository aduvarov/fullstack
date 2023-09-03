'use strict';

let table = document.querySelector('.container__table');
let cell = document.querySelectorAll('.cell');
console.log(cell);

table.addEventListener('click', event => {
    let arr = Array(5).fill(0);
    let td = event.target;
    cell.forEach(elem => {
        let index = elem.cellIndex;
        if (elem.bgColor === 'red') {
            arr[index] += 1;
        }
    });
    let i = td.cellIndex;
    if (arr[i] < 5) {
        td.bgColor = 'red';
    }
});
