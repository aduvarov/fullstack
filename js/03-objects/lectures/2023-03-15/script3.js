'use strict';

let calculator = {
    a: null,
    b: null,
    read: function () {
        this.a = +prompt('Введите значение a');
        this.b = +prompt('Введите значение b');
    },
    sum() {
        let result = this.a + this.b;
        return result;
    },
    mul() {
        let result = this.a * this.b;
        return result;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
