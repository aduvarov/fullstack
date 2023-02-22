//Написать функцию которая разбивает строку из двух предложений на две независимые строки без точек.  За пример взять строку :  let srcStr = 'Talk is cheap. Show me the code.',   dstStr1 = 'Talk is cheap', dstStr2 = 'Show me the code'. Необходимо использовать  методы slice и indexOf

'use strict';

let srcStr = 'Talk is cheap. Show me the code';
let dstStr1;
let dstStr2;
let result = oneString(srcStr);

console.log(dstStr1);
console.log(dstStr2);

function oneString(srcStr) {
    dstStr1 = srcStr.slice(0, 13);
    let index = srcStr.indexOf('Show');
    dstStr2 = srcStr.slice(index, srcStr.length);
}
