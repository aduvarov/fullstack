'use strict';

class CoffeeMachine {
    static count = 0;
    constructor(bunkerSize, model) {
        CoffeeMachine.count++;
        this.bunkerSize = bunkerSize;
        this.model = model;
    }

    static cmSort(cm1, cm2) {
        return +cm1.bunkerSize - +cm2.bunkerSize;
    }
}

let magazine = [
    new CoffeeMachine('10', 'T100'),
    new CoffeeMachine('30', 'T400'),
    new CoffeeMachine('20', 'T300'),
    new CoffeeMachine('60', 'T700'),
    new CoffeeMachine('50', 'T200'),
];

let magazine2 = [
    new CoffeeMachine('10', 'T100'),
    new CoffeeMachine('30', 'T400'),
    new CoffeeMachine('20', 'T300'),
    new CoffeeMachine('60', 'T700'),
    new CoffeeMachine('50', 'T200'),
];

let magazine3 = [
    new CoffeeMachine('10', 'T100'),
    new CoffeeMachine('30', 'T400'),
    new CoffeeMachine('200', 'T300'),
    new CoffeeMachine('650', 'T700'),
    new CoffeeMachine('50', 'T200'),
];

console.log(magazine.sort(CoffeeMachine.cmSort));
console.log(magazine2.sort(CoffeeMachine.cmSort));
console.log(magazine3.sort(CoffeeMachine.cmSort));

// static property;
// static methods;
// #private property; ?
// _pseudo_protected property;
