//Написать функцию поиска комментария в какой-либо строке исходного кода JS.
//например при строке
//let userName = 'Vasya' // Объявляем переменную для имени
// функция должна возвращать '// Объявляем переменную для имени'
'use strict';

let srcString = `userName = 'Vasyasdfa'`;
let result = searchCom(srcString);
console.log(result);

function searchCom(srcString) {
    let index = srcString.indexOf('//');
    let comment = srcString.slice(index, srcString.length);
    return comment;
}
