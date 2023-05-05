'use strict';

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function makeFibanachi() {
    btn1.innerText++;
    let n = btn1.innerText;
    btn2.innerText = fib(n);
}
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

btn1.addEventListener('click', makeFibanachi);
