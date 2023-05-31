'use strict';

// function Car(model, year) {
//     this.year = year;
//     this.model = model;
// }

// Car.prototype.showInfo = function () {
//     console.log(this.model + ' ' + this.year);
// };

class Car {
    constructor(model, year) {
        this.year = year;
        this.model = model;
    }
    showInfo() {
        console.log(this.model + ' ' + this.year);
    }
}

let car1 = new Car('Audi', 2018);
car1.showInfo();
