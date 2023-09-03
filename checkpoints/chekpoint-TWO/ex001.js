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
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
