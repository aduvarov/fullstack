'use strict';

class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        console.log(`Сработал геттер ширины`);
        return this._width;
    }
    set width(value) {
        console.log(`Сработал сеттер ширины`);
        this._width = value;
    }
    get height() {
        console.log(`Сработал геттер высоты`);
        return this._height;
    }
    set height(value) {
        console.log(`Сработал сеттер высоты`);
        this._height = value;
    }
    get area() {
        console.log(`Сработал геттер площади`);
        return this.width * this.height;
    }
}

let r1 = new Rect(10, 20);
// console.log(`r1 width ` + r1.width); //console.log(`Сработал геттер ширины`); r1 width 10
// console.log(`r1 height ` + r1.height); // console.log(`Сработал геттер высоты`); r1 height 20

//console.log(`r1 area ` + r1.area); // `Сработал геттер площади`) `Сработал геттер ширины`; `Сработал геттер высоты` r1 area 200

r1.height = 30; // Сработал cеттер высоты
r1.width = 30; // Сработал cеттер ширины
console.log(`r1 width ` + r1.width); // Сработал геттер ширины r1 width 30
console.log(`r1 height ` + r1.height); //Сработал геттер высоты r1 height 30
console.log(`r1 area ` + r1.area); // Сработал геттер площади Сработал геттер ширины Сработал геттер высоты r1 area 900
