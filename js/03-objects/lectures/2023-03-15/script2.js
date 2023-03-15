'use strict';

let myCars = [
    {
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
    },
    {
        brand: 'McLaren',
        model: '720S',
        year: 2017,
        engine: {
            model: 'M830T',
            volume: 4000,
            fuel: 'gasoline98',
            powerH: 720,
        },
        body: 'MonoCage II',
        color: 'red',
        weight: 1419,
    },
    {
        brand: 'Rolls-Royce',
        model: 'Phantom VII',
        year: 2016,
        engine: {
            model: 'BMW V12',
            volume: 6700,
            fuel: 'gasoline98',
            powerH: 460,
        },
        body: 'Phantom VII',
        color: 'black',
        weight: 2550,
    },
    {
        brand: 'Bugatti',
        model: 'Chiron',
        year: 2016,
        engine: {
            model: 'Bugatti Chiron W16',
            volume: 8000,
            fuel: 'gasoline98',
            powerH: 1500,
        },
        body: 'veyron',
        color: 'black',
        weight: 1995,
    },
];

let garage = {
    right: null,
    left: null,
    center: null,
    pullIn: function (car) {
        if (this.right === null) {
            this.right = car;
        } else if (this.left === null) {
            this.left = car;
        } else if (this.center === null) {
            this.center = car;
        } else {
            console.log('Error: гараж полон');
        }
    },
    pullOut(place) {
        if (place) {
            let car = this[place];
            this[place] = null;
            return car;
        }
    },
};

// let andrewGarage = {};
// Object.assign(andrewGarage, garage);
