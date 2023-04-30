'use strcict';

//Дана масса в килограммах. Найти число полных центнеров в ней.

let kilogramms = 200;

function centner(kilogramms) {
    let centner = kilogramms / 100;
    return Math.trunc(centner);
}
