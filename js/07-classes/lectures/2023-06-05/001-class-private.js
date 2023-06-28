'use strict';

class CoffeMachine {
    _waterAmount = 0;
    _coffeBunker = 0;
    constructor(power) {
        // this._coffeeBunker = 0;
        this._power = power;
        console.log('Создана кофеварка мощьностью ' + power);
    }
    get waterAmount() {
        return this._waterAmount;
    }
    set waterAmount(value) {
        if (value > 1000) {
            console.log('больше 1 литра не влезит');
        } else {
            this._waterAmount = value;
        }
    }
    get power() {
        return this._power;
    }

    loadCoffeeCorn(value) {
        if (this._coffeBunker + value > 100) {
            console.log('Больше 100г не влезет');
        } else {
            this._coffeBunker += value;
        }
    }

    getCoffeeCornAmount() {
        return this._coffeBunker;
    }
}

let cm = new CoffeMachine(100);
cm.waterAmount = 200;
//console.log(cm.#coffeBunker);
// cm = {
//     waterAmount: 0,
//     power: 100,
// };

/*
cm 
cm.loadCoffeeCorn(coffeInGrams) // max 100gr // Zagrusit coffe v mashinu
cm.getCoffeeCornAmount() // Posmotret ckolko coffe v machine
cm.power // posmotret moshnost coffemachini
cm.watterAmount // posmotret skolko vody ili zilit tuda vodu // max 1000 gr
*/

// MVP = Minimal Viable Product
