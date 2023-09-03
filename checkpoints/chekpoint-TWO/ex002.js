'use strict';

let table = document.querySelector('.container__table');

table.addEventListener('click', event => {
    let td = event.target;
    let tr = td.parentNode;
    let count = [];
    tr.childNodes.forEach(element => {
        if (element.bgColor === 'red') {
            count.push(element.bgColor === 'red');
        }
    });
    if (count.length < 5) {
        td.bgColor = 'red';
    }
});
