'use strict';

//Написать функцию удаления пробелов из строки, возвращающую результирующую строку.

let str = 'sad asdasdsadasdasadasdasd asd      asd';
let result = strJoin(str);
console.log(result);

function strJoin(str) {
    let str2 = str.split(' ').join('');
    return str2;
}
