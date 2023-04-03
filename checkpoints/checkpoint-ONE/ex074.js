'use strict';

// Известны год, номер месяца и день рождения человека,
// Узнать год, номер месяца и день сегодняшнего дня. Определить
// возраст человека (число полных лет).
// result number

let dateOfBirth = new Date('2005-08-10');

function humanAge(dateOfBirth) {
    let yearBirth = dateOfBirth.getFullYear();
    let monthBirth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();
    let now = new Date();
    let monthNow = now.getMonth() + 1;
    let yearNow = now.getFullYear();
    let dayNow = now.getDate();
    let years = 0;
    if (monthBirth === monthNow) {
        if (dayOfBirth < dayNow) {
            years = yearNow - yearBirth;
            console.log(years);
        } else if (dayOfBirth > dayNow) {
            years = yearNow - yearBirth;
            console.log(years);
        } else {
            years = yearNow - yearBirth;
            console.log(years);
        }
    }
    if (monthBirth < monthNow) {
        years = yearNow - yearBirth;
        console.log(years);
    }
    if (monthBirth > monthNow) {
        years = yearNow - yearBirth - 1;
        console.log(years);
    }
}
