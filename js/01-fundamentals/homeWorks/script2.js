'use strict';

let yearsCat = Math.trunc(+prompt('Введите возраст кошки/кота в годах'));
let yearsCat1;
let yearsCat2;
let result = cat2HumanYears(yearsCat);
document.write(result);

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
