'use strict';

// ||  или
// &&  и

// let day = +prompt('Введите день недели от 1 до 7'); //5

// if (true && false){
//     document.write('Иди работай!');
// } else {
//     document.write('Поздравляем! Иди отдыхай!');
// }

// let number = 11;

// while (number <= 33) {
//     document.write(number + '<br>');
//     number++;
// }

let start = 1;
let end = 100;

while (start <= end) {
    if (start % 2 === 0) {
        document.write(start + '<br>');
    }
    start = start + 1;
}

document.write('END');
