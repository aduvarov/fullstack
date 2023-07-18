'use strict';

// 1. Promise.all()            // if exeption in any promises then halt imediatly
// 2. Promice.race()           // return fist завершённый promise or error
// 3. Promise.allSettled()     //return array of objects with status and value
// 4. Promise.any()            // return first resolved promise

// 5. Promise.resolve()
// 6. Promise.reject()

// Правила телефонного номера
// 1. Должен начинаться на +
// 2. Должен содержать код страны в скобках
// 3. Должен быть длиной от 10 до 15 цифр
// 4. Должен содержать только следующие символы +-() или пробел

let btn = document.querySelector('.submit__btn');
let checkPhone = document.querySelector('.checkNumber');
let input = document.querySelector('.number');

checkPhone.addEventListener('click', () => {
    let number = input.value;
    checkNumber(number);
});
let checkNumber = number => {
    let regexp = /\+\d+\(\d+\)(\s|-)?\d+(\s|-)?\d+(\s|-)?\d+(\s|-)?\d+/gm;
    let reCorrect = /[^\d\(\)\-\+]/g;
    let correctNumber = reCorrect.test(number);
    let result = regexp.test(number);
    if (result && !correctNumber) {
        btn.disabled = false;
        console.log('corrent');
    } else {
        input.value = '';
        btn.disabled = true;
        console.log('not corrent');
    }
};
