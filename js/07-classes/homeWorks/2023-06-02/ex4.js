'use strict';
/*
        Задание:
        Создайте класс Cone (конус), который будет расширять класс Circle (наследоваться от класса Circle), конструктор класса Cone должен принимать радиус и высоту конуса.
        В классе Cone добавьте метод getVolume, который будет возвращать объем конуса и переопределите метод getArea таким образом, чтобы он вычислял площадь полной поверхности конуса.
        По возможности используйте логику базового класса через ключевое слово super
*/
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Cone extends Circle {
    constructor(radius, height) {
        super(radius);
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        area = super.getArea();
        volume = (1 / 3) * area * this.height;
        return volume;
    }
    getArea() {
        l = Math.sqrt(this.radius ** 2 + this.height ** 2);
        fullArea = super.getArea() + Math.PI * this.radius * l;
        return fullArea;
    }
}
