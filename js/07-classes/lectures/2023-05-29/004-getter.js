'use strict';

let Rect = class {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        console.log(`Сработал геттер ширины`);
        return this._width;
    }
    get height() {
        console.log(`Сработал геттер высоты`);
        return this._height;
    }
    get area() {
        console.log(`Сработал геттер площади`);
        return this.width * this.height;
    }
};

let r1 = new Rect(10, 20);

console.log(`r1 width ` + r1.width);
console.log(`r1 height ` + r1.height);

// Сработал геттер ширины
// r1 width 10
// Сработал геттер высоты
// r1 height 20
