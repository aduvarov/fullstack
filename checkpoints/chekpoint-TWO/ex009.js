'use strict';

//Напишите сайт, который будет генерировать пароль заданного размера. Пароль обязательно должен будет содержать маленькую и большую буквы, цифру и какой-то специальный символ.

let btn = document.querySelector('.container__btn');
let input = document.querySelector('.container__passwordSize');
let password = document.querySelector('.container__password');

let signs = [
    [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ],
    [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ['!', '~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '№', ';', ':', '?'],
];

btn.addEventListener('click', e => {
    e.preventDefault();
    let size = input.value;
    if (size > 3) {
        if (size < 25) {
            let result = '';
            result += signs[0][randomInteger(0, signs.length - 1)];
            result += signs[1][randomInteger(0, signs.length - 1)];
            result += signs[2][randomInteger(0, signs.length - 1)];
            result += signs[3][randomInteger(0, signs.length - 1)];

            size = size - 4;
            let length = 0;
            let arrIndex = 0;
            for (let count = 0; count < size; count++) {
                arrIndex = randomInteger(0, signs.length - 1);
                length = signs[arrIndex].length;
                result += signs[arrIndex][randomInteger(0, signs[arrIndex].length - 1)];
            }
            password.innerHTML = result;
        } else {
            password.innerHTML = 'пароль не может быть больше 25 символов';
        }
    } else {
        password.innerHTML = 'пароль должен быть больше 4 символов';
    }
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
