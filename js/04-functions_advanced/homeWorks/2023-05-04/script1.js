'use strict';

let input = document.querySelector('input');
let btn1 = document.querySelector('#btn1'); //добавить
let btn2 = document.querySelector('#btn2'); //вверх
let btn3 = document.querySelector('#btn3'); // вниз

function addWord() {}

let words = [];
btn1.addEventListener('click', () => {
    words.push(input.value);
    console.log(words);
});
let index = -1;
btn2.addEventListener('click', () => {
    index = index - 1;
    if (Math.abs(index) >= words.length) {
        index = words.length - 1;
    } else {
        input.value = words.at(index);
    }
});
btn3.addEventListener('click', () => {
    index = index + 1;
    if (index === words.length) {
        index = 0;
    } else {
        input.value = words.at(index);
    }
});
