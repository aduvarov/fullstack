'use strict';

//С некоторого момента прошло X дней. Сколько полных недель прошло за этот период?

let day = 15;
let week = 0;

for (let index = 0; index < day; index++) {
    if (day - 7 > 0) {
        day = day - 7;
        week++;
    }
}
console.log(week);
