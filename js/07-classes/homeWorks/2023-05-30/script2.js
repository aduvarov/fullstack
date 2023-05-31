'use strict';

class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    getVolume() {
        let v = 3.14 * this.radius ** 2 * this.height;
        console.log(`Объём цилиндра: ${v}`);
    }
}

let cylinder1 = new Cylinder(10, 5);
cylinder1.getVolume();
let cylinder2 = new Cylinder(20, 10);
cylinder2.getVolume();
