'use strict';

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function makeFibCounter() {
    let buttonCounter = 0;
    function renderOnButton(e) {
        e.target.innerText = fib(++buttonCounter);
    }
    return renderOnButton;
}

let btn1Fibonachi = makeFibCounter();
let btn2Fibonachi = makeFibCounter();

btn1.addEventListener('click', btn1Fibonachi);
btn2.addEventListener('click', btn2Fibonachi);

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
