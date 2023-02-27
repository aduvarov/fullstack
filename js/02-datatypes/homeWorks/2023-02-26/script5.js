'use stcrict';

let str =
    'Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.';
let result = strReverse(str);
console.log(result);

function strReverse(str) {
    let strReverse = str.split('').reverse().join('');
    return strReverse;
}
