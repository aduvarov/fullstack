'use strict';

// number
// BigInt
// string
// boolean
// symbol
// null
// undefined

// Object

// let user = {};

// let garage = {
//     car1: 'bmw',
//     car2: 'mercedes',
//     car3: 'toyota',
//     car4: 'nissan',
//     'car 5': 'audi',
// };

// let user = 'ivan';
// let age = 17;
// let lastName = 'Ivanov';

// let persone = {
//     userName: 'Petr',
//     age: 17,
//     lastName: 'Petrov',
// };

// let persone2 = persone;

// let personeClone = {};
// Object.assign(personeClone, persone);

let topFilm = {
    nameFilm: 'Зеленая миля',
    year: 1999,
    country: 'USA',
    artDirector: 'Фрэнк Дарабонт',
    roles: [
        'Том Хэнкс',
        'Дэвид Морс',
        'Бонни Хант',
        'Майкл Кларк Дункан',
        'Джеймс Кромуэлл',
        'Майкл Джитер',
        'Грэм Грин',
        'Даг Хатчисон',
        'Сэм Рокуэлл',
        'Барри Пеппер',
    ],
    operator: 'Дэвид Тэттерсолл',
    budget: 60_000_000,
    boxOffice: 286_801_374,
    time: { hours: 3, minuts: 9 },
};

document.write('<table border=1>');

for (let key in topFilm) {
    document.write('<tr>');
    document.write(`<td>${key}</td><td>${topFilm[key]}</td>`);
    document.write('</tr>');
}

document.write('</table>');
