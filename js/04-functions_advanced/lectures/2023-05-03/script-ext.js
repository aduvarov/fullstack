'use strict';

btn = document.querySelector('button');

function BtnCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}

btn.addEventListener('click', () => {
    BtnCounter(btn.innerHTML);
});
