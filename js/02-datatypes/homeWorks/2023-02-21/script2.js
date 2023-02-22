//Четные и нечетные символы разделить по разным строкам
// Создайте из четных символов строки srcString строку dstString1 и из нечетных символов - строку dstString2.
'use strict';
let originalString = '0a1b2c3d4e5f6g7h8g9k';

let result = reverseString(originalString);

function reverseString(str) {
    let dstString1 = '';
    let dstString2 = '';
    for (let index = 0; index < str.length; index++) {
        if (index % 2 === 0) {
            dstString2 = dstString2 + str[index];
        } else {
            dstString1 = dstString1 + str[index];
        }
    }
    return console.log(dstString1), console.log(dstString2);
}
