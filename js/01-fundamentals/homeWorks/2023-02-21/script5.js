//Написать функцию которая генерирует ФИО в сокращённой форме из полного.
//Например:  при получении строки 'Иванов Пётр Григорьевич' должна возвращать
//'Иванов П. Г.'  Необходимо использовать indexOf и lastIndexOf
'use strict';

let srcString = 'Иванов Пётр Григорьевич';
let result = fullName(srcString);
console.log(result);

function fullName(srcString) {
    let index = srcString.indexOf(' ');
    let userName = srcString[index + 1];
    let index1 = srcString.lastIndexOf(' ');
    let userName1 = srcString[index1 + 1];
    let index2 = srcString.indexOf(' ');
    let userName3 = srcString.slice(0, index2);
    let result = userName3 + ' ' + userName + '. ' + userName1 + '.';
    return result;
}
