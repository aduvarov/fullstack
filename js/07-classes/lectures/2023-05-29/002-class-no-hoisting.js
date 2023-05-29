'use strict';

// В отличии от функций, классы не поддерживают hoisting (всплытие)
// Использовать класс можно только после его определения
// в данном случае будет ошибка.

let r1 = new Rect(10, 20);
console.log(`r1 area ` + r1.getArea());

class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}
