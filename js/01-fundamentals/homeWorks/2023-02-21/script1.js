'use strict';

let originalString = '.инзиж амроф яавон отсорп отэ ,кеволеч ен отэ – тсиммаргорП';
let result = reverseString(originalString);
console.log(result);

function reverseString(str) {
    let newString = '';
    for (let index = str.length - 1; index >= 0; index--) {
        newString += str[index];
    }
    return newString;
}
