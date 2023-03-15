'use strict';

// nissan GTR 2017

let myCar1 = {
    brand: 'Nissan',
    model: 'GTR',
    year: 2017,
    engine: {
        model: 'VR38DETT',
        volume: 3800,
        fuel: 'gasoline98',
        powerH: 555,
    },
    body: 'R35',
    color: 'white',
    weight: 1752,
};

let andrewCar1 = {};

// for..in

//for (let key in myCar1) {
//    andrewCar1[key] = myCar1[key];
//}

Object.assign(andrewCar1, myCar1);
