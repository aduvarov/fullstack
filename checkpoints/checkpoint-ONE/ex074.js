'use strict';

// Известны год, номер месяца и день рождения человека,
// Узнать год, номер месяца и день сегодняшнего дня. Определить
// возраст человека (число полных лет).
// result number

let dateOfBirth = new Date('2005-08-10');

function humanAge(dateOfBirth) {
    let yearBirth = dateOfBirth.getFullYear();
    let monthBirth = dateOfBirth.getMonth() + 1;
    let now = new Date();
    let monthNow = now.getMonth() + 1;
    let yearNow = now.getFullYear();
    let years = 0;
    if (monthBirth < monthNow) {
        years = yearNow - yearBirth;
        return years;
    } else {
        years = yearNow - yearBirth - 1;
        return years;
    }
}
