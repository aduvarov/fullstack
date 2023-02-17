'use strict';

let animal = prompt('Введите кот/кошка/собака');
let yearsCat1 = 3;
let yearsCat2;
let yearsCat;
let years1 = 3;
let years2;
let years;
let yearsDog1;
let yearsDog2;
let yearsDog;

switch (animal) {
    case 'кошка':
        yearsCat = Math.trunc(+prompt('Введите возраст кошки в годах'));
        let result = cat2HumanYears(yearsCat);
        document.write(result);
        break;
    case 'кот':
        years = Math.trunc(+prompt('Введите возраст кота в годах'));
        let result3 = yearsCot(years);
        document.write(result3);
        break;
    case 'собака':
        yearsDog = Math.trunc(+prompt('Введите возраст собаки в годах'));
        let result4 = dog2HumanYears(yearsDog);
        document.write(result4);
        break;
}

function dog2HumanYears(yearsDog) {
    if (yearsDog === 3) {
        yearsDog = 29;
        return yearsDog;
    }
    if (yearsDog === 1) {
        yearsDog = 15;
        return yearsDog;
    }

    if (yearsDog === 2) {
        yearsDog = 24;
        return yearsDog;
    }
    if (yearsDog > 3) {
        let result5 = years4(yearsDog);
        return result5;
    }
}
function years4(yearsDog1) {
    yearsDog2 = 29;
    for (yearsDog1 = 4; yearsDog1 <= yearsDog; yearsDog1++) {
        yearsDog2 = yearsDog2 + 5;
    }
    return yearsDog2;
}

function cat2HumanYears(years) {
    if (years === 3) {
        years = 28;
        return years;
    }
    if (years === 1) {
        years = 15;
        return years;
    }

    if (years === 2) {
        years = 24;
        return years;
    }
    if (years > 3) {
        let result2 = years3(years);
        return result2;
    }
}

function yearsCot(years1) {
    years2 = 28;
    for (years1 = 4; years1 <= years; years1++) {
        years2 = years2 + 4;
    }
    return years2;
}

function cat2HumanYears(yearsCat) {
    if (yearsCat === 3) {
        yearsCat = 28;
        return yearsCat;
    }
    if (yearsCat === 1) {
        yearsCat = 15;
        return yearsCat;
    }

    if (yearsCat === 2) {
        yearsCat = 24;
        return yearsCat;
    }
    if (yearsCat > 3) {
        let result2 = years3(yearsCat);
        return result2;
    }
}

function years3(yearsCat1) {
    yearsCat2 = 28;
    for (yearsCat1 = 4; yearsCat1 <= yearsCat; yearsCat1++) {
        yearsCat2 = yearsCat2 + 4;
    }
    return yearsCat2;
}
