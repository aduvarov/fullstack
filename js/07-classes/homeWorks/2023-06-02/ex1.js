/*
        Задание:
        Сделайте так, чтобы класс Truck наследовался от класса Car.
        Переопределит метод move, чтобы в производном классе он выводил сообщение, "Грузовик движется со скоростью 50 км/час".
*/
'use strict';

class Car {
    start() {
        console.log('Двигатель запущен.');
    }

    move() {
        console.log('Машина двигается со скоростью 80 км/час');
    }
}

class Truck extends Car {
    weight;
    loadCargo(weight) {
        if (weight > 1000) {
            console.log('Этот грузовик не может перевозить более 1000кг груза');
        } else {
            this.weight = weight;
            console.log(`В грузовик загружено ${this.weight}кг.`);
        }
    }
    move() {
        console.log(`Грузовик движется со скоростью 50 км/час.`);
    }
}

let v1 = new Car();
v1.start();
v1.move();

let v2 = new Truck();
v2.loadCargo(1500);
v2.loadCargo(990);
v2.start();
v2.move();

class BaseClass {
    method() {
        console.log('BaseClass.Method');
    }
}

class DerivedClass extends BaseClass {
    method() {
        super.method(); // Обращение к методу method из родительского класса
        // по сути обращение к прототипу функции конструктора BaseClass
        console.log('DerivedClass.Method');
    }
}

let instance1 = new BaseClass();
let instance2 = new DerivedClass();

console.log(`instance1`);
instance1.method();

console.log(`instance2`);
instance2.method();
