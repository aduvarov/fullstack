'use strict';

var myVAR = 5;

function sum(a, b) {
    return a + b;
}

console.log(window.sum(3, 4));

window.myVAR2 = 5;
let myVAR3 = 5;

console.log(window.myVAR2);

function fnName() {}
