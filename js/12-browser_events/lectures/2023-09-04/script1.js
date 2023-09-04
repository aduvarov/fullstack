'use strict';

let circle3 = document.querySelector('.circle3');
let circle2 = document.querySelector('.circle2');
let circle1 = document.querySelector('.circle1');

circle3.addEventListener('click', () => {
    console.log('click circle3 target');
});

circle2.addEventListener(
    'click',
    () => {
        console.log('click circle2 capture');
    },
    true
);

circle1.addEventListener(
    'click',
    () => {
        console.log('click circle1 capture');
    },
    { capture: true }
);

circle2.addEventListener('click', () => {
    console.log('click circle2 bubble');
});

circle1.addEventListener('click', () => {
    console.log('click circle1 bubble');
});
