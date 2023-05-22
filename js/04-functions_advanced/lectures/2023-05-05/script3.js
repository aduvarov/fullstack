'use strict';

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function makeBtn1Counter() {
    let counter = 0;
    return function (event) {
        event.target.innerText = fib(++counter);
    };
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let btn1Counter = makeBtn1Counter();
let btn2Counter = makeBtn1Counter();

btn1.addEventListener('click', btn1Counter);
btn2.addEventListener('click', btn2Counter);
