'use strict';

//Найти преобладающее направление ветра в своём городе и его среднюю интенсивность (именно этого направления).
// Найти в какой декаде месяца 1, 2 или 3 была самая безветренная погода. Если будет одинаковые значения у двух декад выбрать первую.
// Результат объект.
// Например
// {
//   country: 'Казахстан',
//   city: 'Караганда',
//   prevalentwWindDirection: 'SE',
//   averageWindSpeed: 3,
//   minimumWindDecade: 1
// }
// Данные в массивы необходимо собрать с сайта вручную. Необходимо проходить в объекте все виды ветров, даже если там нет данных. Это надо делать с помощью цикла for in. А у массивов необходимо использовать метод .forEach().

let obj = {
    country: 'Беларусь',
    city: 'Ганцевичи',
};

function prevalentWindDirection(obj) {
    let winds = {
        N: [3, 1],
        NE: [2, 3, 4, 3, 1, 3],
        E: [2, 2, 3],
        SE: [2, 4, 3, 3],
        S: [3, 4, 5, 3, 3],
        SW: [5, 3, 3, 4, 4, 6],
        W: [7, 4, 1, 2, 4],
        NW: [],
    };
    let nodWind = [];
    let summa;
    let nod = 0;
    for (let key in winds) {
        summa = 0;
        winds[key].forEach(element => {
            summa = summa + element;
            return key;
        });
        nod = Math.trunc(summa / winds[key].length);
        winds[key] = nod;
        nodWind.push(nod);
    }
    let medSpeed = 0;
    for (let index = 0; index < nodWind.length; index++) {
        if (nodWind[index] < nodWind[index + 1]) {
            medSpeed = nodWind[index + 1];
        }
    }
    for (let key in winds) {
        if (winds[key] === medSpeed) {
            obj.prevalentwWindDirection = key;
            obj.averageWindSpeed = medSpeed;
        }
    }
    let month = {
        decade1: [5, 3, 7, 3, 4, 1, 2, 4, 2, 2],
        decade2: [3, 3, 4, 4, 5, 3, 3, 3, 2, 3],
        decade3: [5, 4, 3, 1, 2, 3, 3, 1, 4, 6, 4],
    };
    let sum = [];
    let summa1;
    let nod1;
    for (let key in month) {
        summa1 = 0;
        month[key].forEach(element => {
            summa1 = summa1 + element;
            return key;
        });
        nod1 = Math.trunc(summa1 / month[key].length);
        month[key] = nod1;
        sum.push(nod1);
    }

    let minDecade = sum[0];
    for (let index = 0; index < sum.length; index++) {
        if (sum[index] > sum[index + 1]) {
            minDecade = sum[index + 1];
        }
    }
    for (let key in month) {
        if (month[key] === minDecade) {
            obj.minimumWindDecade = key;
            return obj;
        }
    }
}
