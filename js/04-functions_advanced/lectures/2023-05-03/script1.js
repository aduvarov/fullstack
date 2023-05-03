'use strict';

let btn = document.querySelector('#btn');
let wrapper = document.querySelector('.wrapper');
console.log('wrapper: ', wrapper);

function makeBgColors() {
    let index = 0;
    let colors = ['blue', 'red', 'white', 'green', 'yellow', 'black'];
    return function () {
        index++;
        if (index === colors.length) {
            index = 0;
        }
        wrapper.style.backgroundColor = colors[index];
    };
}
let bgColors = makeBgColors();

btn.addEventListener('click', bgColors);
