'use strict';

let sourceString = 'Управление сложностью является сущностью компьютерного программирования';
let result = longWordlen(sourceString); // 16
console.log(sourceString);
console.log(result);
function longWordlen(sourceString) {
    let strSplit = sourceString.split(' ');
    let longestWord = 0;
    for (let index = 0; index < strSplit.length; index++) {
        if (strSplit[index].length > longestWord) {
            longestWord = strSplit[index].length;
        }
    }
    return longestWord;
}
