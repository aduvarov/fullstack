'use strict';

// let a = true && true;

// a = false;

// // && возвращает первое ложное значение или последнее истинное
// // || возвращает первое истинное значение или последнее ложное

// let result1 = 5;
// let result2 = 10;
// let result3 = result1 + result2 * 3;
// document.write(result3); //35

// for ([начало]; [условие]; [шаг]) {
//     выражения;
// }

// for (let counter = 0; counter <= 9; counter++) {
//     document.write(counter + '<br>');
// }
// document.write('<table border="1">');
// document.write('<tr>');
// for (let counter = 0; counter <= 9; counter++) {
//     document.write('<td>' + counter + '</td>');
// }
// document.write('</tr>');
// document.write('</table>');

// document.write('<table border="1">');
// for (let tableRow = 0; tableRow <= 9; tableRow++) {
//     if (tableRow % 2 === 0) {
//         document.write('<tr><td>' + tableRow + '</td>');
//         for (let tableData = 1; tableData <= 9; tableData++) {
//             if (tableData % 2 === 0) {
//                 document.write('<td>' + tableData + '</td>');
//             }
//         }
//         document.write('</tr>');
//     }
// }

// document.write('</table>');

// document.write('<select size="1">');
// for (let option = 1; option <= 12; option++) {
//     document.write('<option>' + option);
//     document.write('</option>');
// }
// document.write('</select>');

// document.write('Число: <b>100</b>');
// document.write('<br />');
// document.write('Число: <b>80</b>');
// document.write('<br />');
// document.write('Число: <b>60</b>');
// document.write('<br />');
// document.write('Число: <b>50</b>'); // 90 70 30
// document.write('<br />');
// document.write('Число: <b>40</b>');
// document.write('<br />');
// document.write('Число: <b>20</b>');
// document.write('<br />');
// document.write('Число: <b>10</b>');
// document.write('<br />');
// document.write('Число: <b>0</b>');

// document.write('<hr>');

// for (let num = 100; num >= 0; num = num - 10) {
//     if (num !== 90 && num !== 70 && num !== 30) {
//         document.write('Число: ' + '<b>' + num + '</b>' + '<br />');
//     }
// }

// let originPassword = 'XXX';
// let password;
// do {
//     password = prompt('Введите пароль!');
// } while (password !== originPassword);

// document.write('<h1>Доступ разрешён</h1>');

let day = +prompt('Введите номер дня недели:', 1);

switch (day) {
    case 1:
        document.write('Это понедельник');
        break;
    case 2:
        document.write('Это вторник');
        break;
    case 3:
        document.write('Это среда');
        break;
    case 4:
        document.write('Это четверг');
        break;
    case 5:
        document.write('Это пятница');
        break;
    case 6:
    case 7:
        document.write('Это выходной');
        break;
    default:
        document.write('Вы ввели неправильный номер дня недели!');
}

document.write('<hr>');
