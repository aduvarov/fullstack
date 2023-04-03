'use strict';

//В некотором году (назовем его условно первым) на участке
//  в 100 га средняя урожайность ячменя составила 20 ц с гектара.
// После этого каждый год площадь участка увеличивалась на 5 %,
// а средняя урожайность – на 2 %. Определить: какой урожай будет собран за первые шесть лет в общем.
// result number

let site = 100;
let barleyYield = 20;

let summa = 20;

for (let count = 1; count <= 7; count++) {
    site = site * 0.05 + site;
    barleyYield = barleyYield * 0.02 + barleyYield;
    summa = summa + site * barleyYield;
}
console.log(summa.toFixed(1));
