'use strict';
// Написать программу переводящую кошачий возраст в человеческий.
// Известно, что
// Первый год жизни кошки эквивалентен 15 годам человека.
// Второй год жизни добавляет к эквиваленту 9 лет.
// Каждый последующие год добавляет к эквиваленту 4 года.
// Например:
// "Введите возраст кошки/кота в годах (округлённое до целого значение):" 3
// "Возраст кошки/кота эквивалентен 28 годам человека"
// Имя для функции: cat2HumanYears
let animal = prompt('Введите кот/кошка/собака');
let animalYears;
let result;

switch (animal) {
    case 'собака':
        animalYears = +prompt('Собачий возвраст в годах'); //3
        result = animal2HumanYears(animalYears, 15, 9, 5);
        break;
    case 'кот':
    case 'кошка':
        animalYears = +prompt('Кошачий возвраст в годах'); //3
        result = animal2HumanYears(animalYears, 15, 9, 4);
        break;
}
document.write(result);

function animal2HumanYears(animalYears, delta1, delta2, deltaOther) {
    let humanYears = 0;
    let year = 1;
    let delta = 1;

    while (year <= animalYears) {
        if (year === 1) {
            delta = delta1;
        } else if (year === 2) {
            delta = delta2;
        } else {
            delta = deltaOther;
        }
        humanYears += delta;
        year++;
    }
    return humanYears;
}
