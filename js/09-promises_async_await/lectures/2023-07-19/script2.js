'use strict';

xyz();

function add() {
    console.log('y');
    yyy();
    console.log(1);
}

function yyy() {
    setTimeout(console.log, 0, 'zero');
    console.log('yyy');
    setTimeout(console.log, 100, '100');
}

function xyz() {
    Promise.resolve(1).then(data => console.log(data));
    kdd();
    Promise.resolve(2).then(data => console.log(data));
}

function kdd() {
    Promise.resolve(3).then(data => console.log(data));
    add();
}

/*


*/

// queue
// FIFO (First In First Out)
// LIFO (Last In First Out) any Stack

console.log('one');
setTimeout(function () {
    console.log('two');
}, 0);
console.log('three');
console.log('4');
console.log('5');
console.log('6');
