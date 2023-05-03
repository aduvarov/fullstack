'use strict';

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function makeBtnCounter(button) {
    let counter = 0;
    return function () {
        counter++;
        button.innerText = counter;
    };
}

btn1.addEventListener('click', makeBtnCounter(btn1));
btn2.addEventListener('click', makeBtnCounter(btn2));
