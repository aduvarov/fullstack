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
    l;
    area;
    volume;
    fullArea;
    constructor(radius, height) {
        super(radius);
        this.height = height;
    }
    getVolume() {
        this.area = super.getArea();
        this.volume = (1 / 3) * this.area * this.height;
        console.log(this.volume);
    }
    getArea() {
        this.l = Math.sqrt(this.radius ** 2 + this.height ** 2);
        this.fullArea = super.getArea() + Math.PI * this.radius * this.l;
        console.log(this.fullArea);
    }
}
let v2 = new Cone(3, 5);
v2.getVolume();
v2.getArea();
