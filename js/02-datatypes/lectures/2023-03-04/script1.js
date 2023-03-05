// 'use strict';

// let cars = ['germany:bmw', 'japan:toyota', 'germany:audi', 'germany:mersedes', 'japan:porshe'];
// let germanyCars = [];
// let japanCars = [];

// cars.forEach(f1);

// function f1(element, index, array) {
//     let car = element.split(':'); //  ['germany', 'bmw']
//     if (car[0] == 'germany') {
//         germanyCars.push(car[1]);
//     }
//     if (car[0] == 'japan') {
//         japanCars.push(car[1]);
//     }
// }
// console.log(germanyCars);
// console.log(japanCars);

// let numbersPlus = [];
// let numbers = [];
// for (let num = 1; num <= 20; num++) {
//     if (num % 2 === 0) {
//         numbers.push(num);
//     }
// }

// // numbers.forEach((element, index) => {
// //     numbersPlus.push(element + 1);
// //     console.log(index);
// // });

// // forEach
// // function numberPlus(element) {
// //     element = element + 1;
// //     numbersPlus.push(element);
// // }

// // map
// function numberPlus(element) {
//     return element + 1;
// }

// numbersPlus = numbers.map(numberPlus);
// console.log(numbersPlus);

let cars = ['germany:bmw', 'japan:toyota', 'germany:audi', 'germany:mersedes', 'japan:porshe']; // 'Germany:BMW'
let modernCars = [];

// modernCars = cars.map(modify);

// function modify(countryAndCar) {
//     // countryAndCar = 'germany:bmw'; modifiedCountryAndCar should be 'Germany:BMW'
//     let modifiedCountryAndCar;
//     let country = countryAndCar.split(':')[0];
//     let car = countryAndCar.split(':')[1];
//     country = country[0].toUpperCase() + country.slice(1);
//     car = car.toUpperCase();
//     modifiedCountryAndCar = country + ':' + car;
//     return modifiedCountryAndCar;
// }

// modernCars = cars.map(countryAndCar => {
//     let modifiedCountryAndCar;
//     let country = countryAndCar.split(':')[0];
//     let car = countryAndCar.split(':')[1];
//     country = country[0].toUpperCase() + country.slice(1);
//     car = car.toUpperCase();
//     modifiedCountryAndCar = country + ':' + car;
//     return modifiedCountryAndCar;
// });
// let germanyCars = cars.filter(germanyFilter);

// function germanyFilter(car) {
//     car = car.split(':');
//     if (car[0] === 'germany') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(germanyCars);

//.filter()

//.some .every //boolean

//.some
// let japanCars = cars.some(checkJapan);

// function checkJapan(car) {
//     car = car.split(':');
//     if (car[0] === 'japan') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(japanCars);

//.every

let allGermany = cars.every(checkGermany);

function checkGermany(car) {
    car = car.split(':');
    if (car[0] === 'germany') {
        return true;
    } else {
        return false;
    }
}
console.log(allGermany);
