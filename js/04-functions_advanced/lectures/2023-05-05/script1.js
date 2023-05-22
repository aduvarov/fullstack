'use strict';

let input = document.querySelector('input');
let btnAdd = document.querySelector('#btn1');
let btnUp = document.querySelector('#btn2');
let btnDown = document.querySelector('#btn3');

function makeInputHistory(button) {
    let history = [];
    let pointer = 100;
    return function (event) {
        console.dir(event.target);
        if (event.target === btnAdd) {
            history.push(input.value);
            pointer = history.length;
            input.value = '';
        } else if (event.target === btnUp) {
            if (pointer >= 1) {
                pointer--;
            }
            input.value = history[pointer];
        } else if (event.target === btnDown) {
            if (pointer < history.length) {
                pointer++;
            }
            if (pointer >= history.length) {
                input.value = '';
            } else {
                input.value = history[pointer];
            }
        }
    };
}

let inputHistory = makeInputHistory();

btnAdd.addEventListener('click', inputHistory);
btnUp.addEventListener('click', inputHistory);
btnDown.addEventListener('click', inputHistory);
