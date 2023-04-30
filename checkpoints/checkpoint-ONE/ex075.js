'use strict';

//Известны год, номер месяца и день рождения каждого из
// двух человек. Определить, кто из них старше.
let man1 = {
    year1: 2005,
    month1: 4,
    day1: 5,
};

let man2 = {
    year2: 2005,
    month2: 8,
    day2: 5,
};

if (man1.year1 > man2.year2) {
    console.log(man2);
} else if (man1.year1 < man2.year2) {
    console.log(man1);
} else if (man1.year1 === man2.year2) {
    if (man1.month1 === man2.month2) {
        if (man1.day1 === man2.day2) {
            console.log('Одинакового возраста');
        } else if (man1.day1 > man2.day2) {
            console.log(man2);
        } else if (man1.day1 < man2.day2) {
            console.log(man1);
        }
    } else if (man1.month1 > man2.month2) {
        console.log(man2);
    } else if (man1.month1 < man2.month2) {
        console.log(man1);
    }
}
