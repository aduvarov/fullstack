'use strict';

console.log('true || NaN', 'Your answer: ');
console.log('60+15' - '60-15' - 60 / 15, 'Your answer: ');
console.log(true || NaN, 'Your answer: ');
console.log(Infinity, 'Your answer: ');
console.log(-Infinity, 'Your answer: ');
console.log(checkUserPassword('misha', '12345678'), 'Your answer: ');

let greetUser = function (userName) {
    console.log('Привет ' + userName);
};
greetUser('Михаил');
console.log('Your answer: ');

function checkUserPassword(user, password) {
    const correctUser = 'misha';
    const correctPassword = 12345678;
    if (correctUser !== user) {
        return false;
    }
    if (correctPassword !== password) {
        return false;
    }
    return true;
}
