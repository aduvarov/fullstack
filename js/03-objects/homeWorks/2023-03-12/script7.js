'use strict';

// Написать функцию подсчёта строковых (string) значений у входящего объекта.
let obj = {
    login: 'i.ivanov',
    passwordHash: '$2y$10$5Cv6c6s1Afupd1wR3wV8nOQV7WXBE8rJXEYZ2dFNR.pUX7fQ9al9S',
    userName: 'Ivan',
    lastName: 'Ivanov',
    age: 18,
    knownLanguages: 3,
    lastLogin: '2023-03-08T23:00',
    totalHoursOnSite: 200,
};
let str = 0;
let result = countStrValues(obj); // 5
function countStrValues(obj) {
    for (let index in obj) {
        if (typeof obj[index] === 'string') {
            str++;
        }
    }
    return console.log(str);
}

//
// подсказка: typeof
