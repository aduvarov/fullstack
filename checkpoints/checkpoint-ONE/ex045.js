'use strict';

//ex045:
// Известны год и номер месяца рождения человека, а также год и номер месяца сегодняшнего дня (январь – 1 и т. д.). Определить возраст человека (число полных лет). В случае совпадения указанных номеров месяцев считать, что прошел полный год.

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
        console.log(years);
    }
    if (monthBirth >= monthNow) {
        years = yearNow - yearBirth - 1;
        console.log(years);
    }
}
