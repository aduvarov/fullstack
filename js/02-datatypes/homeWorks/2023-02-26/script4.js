'use stcrict';

let str = prompt('Введите фразу или слово или число, для проверки на палиндром:');
let strReverse = str.split('').reverse().join('');

let result = isPalindrom(str);
console.log(result);

function isPalindrom(str) {
    if (str == strReverse) {
        alert('Это палиндром');
    } else {
        alert('Это не палиндром');
    }
}
