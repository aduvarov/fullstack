'use strict';
// 0. есть тесто
// 1. Раскатать тесто - раскатанное тесто
// 2. Уложить на тесто колбасу - полупицца
// 3. Уложить на полупиццу помидоры - полупицца
// 4. Уложить полупицу сыр - сырая пица
// 5. Поместь сырую пицу в духовку - готовая пица

let p1 = document.querySelector('.povar1');
console.log('p1: ', p1);
let p2 = document.querySelector('.povar2');
let p3 = document.querySelector('.povar3');
let p4 = document.querySelector('.povar4');

function makePizza(povar) {
    rollOut('тесто', povar, halfpizzaTR => {
        addMeat(halfpizzaTR, povar, halfpizzaTRK => {
            addTomato(halfpizzaTRK, povar, halfpizzaTRKP => {
                addCheese(halfpizzaTRKP, povar, halfpizzaTRKPC => {
                    oven(halfpizzaTRKPC, povar, pizza => {
                        povar.innerHTML += `${pizza}<br>`;
                    });
                });
            });
        });
    });
}

function makeVeganPizza(povar) {
    rollOut('тесто', povar, halfpizza => {
        addTomato(halfpizza, povar, halfpizza => {
            addCheese(halfpizza, povar, halfpizza => {
                oven(halfpizza, povar, pizza => {
                    povar.innerHTML += `${pizza}<br>`;
                });
            });
        });
    });
}

function rollOut(product, povar, callback) {
    let result = `раскатанное ${product}<br>`;
    povar.innerHTML += `${result}`;
    setTimeout(callback, rnd(), result, povar);
}
function addMeat(product, povar, callback) {
    let result = `${product} + колбаса`;
    povar.innerHTML += `${result}<br>`;
    setTimeout(callback, rnd(), result, povar);
}
function addTomato(product, povar, callback) {
    let result = `${product} + томаты`;
    povar.innerHTML += `${result}<br>`;
    setTimeout(callback, rnd(), result, povar);
}
function addCheese(product, povar, callback) {
    let result = `${product} + сыр`;
    povar.innerHTML += `${result}<br>`;
    setTimeout(callback, rnd(), result, povar);
}
function oven(product, povar, callback) {
    let result = `готовая пицца`;
    setTimeout(callback, rnd(), result);
}

let povar1 = makePizza(p1);
let povar2 = makeVeganPizza(p2);
let povar3 = makePizza(p3);
let povar4 = makePizza(p4);

function rnd(min = 1000, max = 3000) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
