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

let city = {
    country: 'Беларусь',
    cityName: 'Ганцевичи',
    month: 'Jan',
    winds: {
        N: [3, 1], //2
        NE: [2, 3, 4, 3, 1, 3], //6
        E: [2, 2, 3], //3
        SE: [2, 4, 3, 3], //4
        S: [3, 4, 5, 3, 3], //5
        SW: [5, 3, 3, 4, 4, 6], //6
        W: [7, 4, 1, 2, 4], //5
        NW: [], //0
    },
    decades: {
        1: [5, 3, 7, 3, 4, 1, 2, 4, 2, 2],
        2: [3, 3, 4, 4, 5, 3, 3, 3, 2, 3],
        3: [5, 4, 3, 1, 2, 3, 3, 1, 4, 6, 4],
    },
};

let result = prevalentWindDirection(city);

function prevalentWindDirection(city) {
    let result = {
        country: city.country,
        city: city.cityName,
        prevalentwWindDirection: '',
        averageWindSpeed: 0,
        minimumWindDecade: 0,
        month: city.month,
    };
    let winds = Object.entries(city.winds);
    let maxWind = winds[0][1].length;

    for (let wind of winds) {
        if (wind[1].length > maxWind) {
            maxWind = wind[1].length;
        }
    }

    let pretendents = winds.filter(wind => wind[1].length === maxWind);
    let windMax = pretendents[0][1].reduce((acc, wind) => acc + wind, 0);
    let winner = pretendents[0];

    for (let wind of pretendents) {
        let windSum = wind[1].reduce((acc, wind) => acc + wind, 0);
        if (windSum > windMax) {
            windMax = windSum;
            winner = wind;
        }
    }
    result.prevalentwWindDirection = winner[0];
    let sum = winner[1].reduce((acc, element) => {
        acc += element;
        return acc;
    }, 0);
    result.averageWindSpeed = (sum / winner[1].length).toFixed(1);

    let decade1 = city.decades[1].reduce((acc, element) => (acc += element)) / city.decades[1].length; //3
    let decade2 = city.decades[2].reduce((acc, element) => (acc += element)) / city.decades[2].length; //2
    let decade3 = city.decades[3].reduce((acc, element) => (acc += element)) / city.decades[3].length; //2
    if (decade1 <= decade2 && decade1 <= decade3) {
        result.minimumWindDecade = 1;
    } else if (decade2 <= decade1 && decade2 <= decade3) {
        result.minimumWindDecade = 2;
    } else {
        result.minimumWindDecade = 3;
    }
    return result;
}

console.log(result);
