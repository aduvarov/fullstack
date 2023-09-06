'use strict';

/* Даны два числовых инпута и кнопка. Первый отвечает за кол-во строк, второй за кол-во столбцов.
По нажитию кнопке на странице должна сгенерироваться таблица соответствующеей размерности.
В каждой ячейке таблице должно находится произвольная цифра.
*/
let btn = document.querySelector('.controller__btn');
let content = document.querySelector('.content');

btn.addEventListener('click', () => {
    content.innerHTML = '';
    let rows = document.querySelector('.controller__rows').valueAsNumber;
    let columns = document.querySelector('.controller__columns').valueAsNumber;
    let table = document.createElement('table');
    table.setAttribute('class', 'content__table');
    let tbody = document.createElement('tbody');
    table.append(tbody);
    for (let r = 0; r < rows; r++) {
        let row = document.createElement('tr');
        tbody.append(row);
        for (let c = 0; c < columns; c++) {
            let text = document.createTextNode(`${randomInteger(1, 9)}`);
            let col = document.createElement('td');
            col.append(text);
            row.append(col);
        }
    }
    content.append(table);

    table.addEventListener('mouseover', e => {
        let arrTr = document.querySelectorAll('tr');
        arrTr = Array.from(arrTr);
        let index = e.target.cellIndex;
        let i = e.target.cellIndex;
        let tr = e.target.parentNode;
        let iTr = arrTr.indexOf(tr);
        if (iTr !== 0 && iTr !== arrTr.length - 1 && iTr > 0) {
            let tCell = arrTr[iTr - 1].children[i];
            let bCell = arrTr[iTr + 1].children[i];
            tCell.classList.add('top__cell');
            bCell.classList.add('bottom__cell');
        } else if (iTr !== arrTr.length - 1 && iTr >= 0) {
            let bCell = arrTr[iTr + 1].children[i];
            bCell.classList.add('bottom__cell');
        }
        if (iTr === arrTr.length - 1 && iTr >= 0) {
            let tCell = arrTr[iTr - 1].children[i];
            tCell.classList.add('top__cell');
        } else if (iTr !== 0 && iTr > 0) {
            let tCell = arrTr[iTr - 1].children[i];
            tCell.classList.add('top__cell');
            let bCell = arrTr[iTr + 1].children[i];
            bCell.classList.add('bottom__cell');
        }
        e.target.classList.add('bgRed');
        if (index > 0 && iTr >= 0) {
            tr.children[index - 1].classList.add('left__cell');
        }
        if (index < tr.children.length - 1 && iTr >= 0) {
            tr.children[index + 1].classList.add('right__cell');
        }
    });
    table.addEventListener('mouseout', e => {
        let arrTr = document.querySelectorAll('tr');
        arrTr = Array.from(arrTr);
        let index = e.target.cellIndex;
        let i = e.target.cellIndex;
        let tr = e.target.parentNode;
        let iTr = arrTr.indexOf(tr);
        if (iTr !== 0 && iTr !== arrTr.length - 1 && iTr > 0) {
            let tCell = arrTr[iTr - 1].children[i];
            let bCell = arrTr[iTr + 1].children[i];
            tCell.classList.remove('top__cell');
            bCell.classList.remove('bottom__cell');
        } else if (iTr !== arrTr.length - 1 && iTr >= 0) {
            let bCell = arrTr[iTr + 1].children[i];
            bCell.classList.remove('bottom__cell');
        }
        if (iTr === arrTr.length - 1 && iTr >= 0) {
            let tCell = arrTr[iTr - 1].children[i];
            tCell.classList.remove('top__cell');
        } else if (iTr !== 0 && iTr > 0) {
            let tCell = arrTr[iTr - 1].children[i];
            tCell.classList.remove('top__cell');
            let bCell = arrTr[iTr + 1].children[i];
            bCell.classList.remove('bottom__cell');
        }
        e.target.classList.remove('bgRed');
        if (index > 0) {
            tr.children[index - 1].classList.remove('left__cell');
        }
        if (index < tr.children.length - 1) {
            tr.children[index + 1].classList.remove('right__cell');
        }
    });
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
