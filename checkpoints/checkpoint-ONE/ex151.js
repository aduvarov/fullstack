'use strict';

//Смоделировать слот машину (однорукий бандит). В котором имеется три барабана, на каждом барабане нарисованы 9 различных фруктов.
// Каждый запуск игры выдаёт случайным образом на каждом барабане в центре 1 фрукт. Машина должена быть представлена в виде объекта
// с 3 свойствами массивами фруктов и одним методом получения случайного фрукта из каждого барабана.
// В итоге машина должна выдавать например
// ['банан','апельсин','банан'].

let bandit = {
    cylinder1: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
    cylinder2: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
    cylinder3: ['яблоко', 'банан', 'виноград', 'киви', 'вишня', 'лимон', 'груша', 'гранат', 'апельсин'],
    roll() {
        let result = [];
        let rnd;
        let fruit;
        for (let index = 1; index <= 3; index++) {
            rnd = randomInteger(0, 8);
            fruit = this.cylinder1[rnd];
            result.push(fruit);
        }
        return result;
    },
};
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
