'use strict';

let table = document.querySelector('.container__table');

table.addEventListener('click', event => {
    let td = event.target;
    let tr = td.parentNode;
    let arrTr = Array(tr.children);
    let arr = Array(5).fill(0);
    let i = td.cellIndex;
    for (let index = 0; index < 5; index++) {
        if (arrTr[0][index].bgColor === 'red') {
            arr[index] += 1;
        }
    }

    tr.childNodes.forEach(element => {
        if (element.cellIndex === i) {
            if (
                (arr[i + 1] === 0 && arr[i - 1] === 0) ||
                (element.cellIndex === 4 && arr[i - 1] === 0) ||
                (element.cellIndex === 0 && arr[i + 1] === 0)
            ) {
                if (arr[element.cellIndex] === 0) {
                    td.bgColor = 'red';
                    arr[element.cellIndex] += 1;
                }
            }
        }
    });
});
