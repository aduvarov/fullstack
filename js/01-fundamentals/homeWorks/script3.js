'use strict';

let yearsDog = Math.trunc(+prompt('Введите возраст сабаке в годах'));
let yearsDog1;
let yearsDog2;
let result = dog2HumanYears(yearsDog);
document.write(result);

function dog2HumanYears(yearsDog) {
    if (yearsDog === 3) {
        yearsDog = 28;
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
        let result2 = years3(yearsDog);
        return result2;
    }
}

function years3(years1) {
    yearsDog2 = 28;
    for (yearsDog1 = 4; yearsDog1 <= yearsDog; yearsDog1++) {
        yearsDog2 = yearsDog2 + 5;
    }
    return yearsDog2;
}
