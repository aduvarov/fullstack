'use strict';

console.log('true || NaN', 'Your answer: true || NaN');
console.log('60+15' - '60-15' - 60 / 15, 'Your answer: NaN ');
console.log(true || NaN, 'Your answer: true');
console.log(Infinity, 'Your answer: Infinity ');
console.log(-Infinity, 'Your answer:-Infinity');
console.log(checkUserPassword('misha', '12345678'), 'Your answer: true');

let greetUser = function (userName) {
    console.log('Привет ' + userName);
};
greetUser('Михаил');
console.log('Your answer: Привет Михаил');

function checkUserPassword(user, password) {
    const correctUser = 'misha';
    const correctPassword = '12345678';
    if (correctUser !== user) {
        return false;
    }
    if (correctPassword !== password) {
        return false;
    }
    return true;
}
