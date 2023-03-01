'use stcrict';

// Написать функцию которая принимает строку состоящую из одного или скольки угодно слов, делает разворот каждого слова и возвращает результирующую строку.
// Пример вход: 'Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.'
// Пример выход: 'еинечубО юинавориммаргорп ен тежом ьтичуан ьтыб ,мотрепскэ ежкат как и еинечузи йетсик и косарк ен тежом ьтитарверп обил-огок в .акинжодух'
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Каждое слово надо переворачивать в отдельности

let str =
    'Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.';
str = str.split(' ');
let result = strReverse(str);
console.log(result);

function strReverse(str) {
    let strReverse = [];
    let wordRevers = [];
    for (let index = 0; index < str.length; index++) {
        // strReverse = strReverse[index].reverse();
        wordRevers = str[index].split('').reverse().join('');
        strReverse.push(wordRevers);
    }
    return strReverse;
}
