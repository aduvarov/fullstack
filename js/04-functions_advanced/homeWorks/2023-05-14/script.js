'use strict';

let input = document.querySelector('#num');
let btn = document.querySelector('#gameTable');
let table = document.querySelector('#table');
let colors = ['blue', 'yellow', 'green', 'red', 'black'];
let sizes = ['medium', 'medium2', 'small', 'small2', 'big', 'big2'];
let resultStr = '';

btn.addEventListener('click', () => {
    let resultStr = '';
    let numbers = [];
    let rnd = 0;
    while (numbers.length < input.value ** 2) {
        rnd = randomInteger(1, input.value ** 2);
        if (!numbers.includes(rnd)) {
            numbers.push(rnd);
        }
    }
    let counter = 0;
    for (let index = 0; index < +input.value; index++) {
        resultStr += '<tr>';
        for (let index1 = 0; index1 < +input.value; index1++) {
            resultStr += `<td class="${sizes[randomInteger(0, 5)]} ${colors[randomInteger(0, 4)]}">${
                numbers[counter]
            }</td>`;
            counter++;
        }
        resultStr += '</tr>';
        table.innerHTML = resultStr;
    }
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
