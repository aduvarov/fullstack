'use strict';

let input = document.querySelector('.input');
let a = document.querySelector('a');

// document.addEventListener('keydown', event => {
//     // console.log('Клавиша нажата');
//     console.dir(event.code);
//     console.log(event.repeat);
//     // console.dir(event.key);
// });

// input.addEventListener('keyup', event => {
//     // console.log('Клавиша отпущена');
//     // console.log(event);
// });

a.addEventListener('click', event => {
    event.preventDefault();
    console.log('a');
    location.href = 'https://www.ya.ru';
});
