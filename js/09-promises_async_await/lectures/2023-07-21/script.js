'use strict';

let povars = [
    { name: 'Иван', workTable: undefined },
    { name: 'Мария', workTable: undefined },
    { name: 'Михаил', workTable: undefined },
    { name: 'Наталья', workTable: undefined },
];

povars.forEach((povar, index) => (povar.workTable = document.querySelector(`.workTable${index + 1}`)));
console.log('povars: ', povars);

let ovens = Array(2).fill(null);

let slicedTomatos = Array(4).fill('порезанные помидоры');
let slicedSalami = Array(4).fill('салями');
let slicedMushrooms = Array(4).fill('шампиньоны');
let slicedCheese = Array(4).fill('сыр');
let slicedVCheese = Array(4).fill('веганский сыр');
let skalka = true;

renderProducts();

makePizza(povars[0], 'margarita');
makePizza(povars[1], 'vegan');
makePizza(povars[2], 'margarita');
makePizza(povars[3], 'margarita');
//oven.innerHTML += `<h2>Иван</h2><h4>пица запекается</h4>`;

function renderProducts() {
    let tomatos = document.querySelector('.tomatos>.productAmount');
    let salami = document.querySelector('.salami>.productAmount');
    let mushrooms = document.querySelector('.mushrooms>.productAmount');
    let cheese = document.querySelector('.cheese>.productAmount');
    let vCheese = document.querySelector('.vCheese>.productAmount');

    tomatos.innerText = salami.innerText = mushrooms.innerText = cheese.innerText = vCheese.innerText = '';

    slicedTomatos.forEach(() => (tomatos.innerText += '*'));
    slicedSalami.forEach(() => (salami.innerText += '*'));
    slicedMushrooms.forEach(() => (mushrooms.innerText += '*'));
    slicedCheese.forEach(() => (cheese.innerText += '*'));
    slicedVCheese.forEach(() => (vCheese.innerText += '*'));
}
async function makePizza(povar, type) {
    try {
        povar.workTable.innerHTML = `<h3>${povar.name}</h3><h6>Приступил к работе</h6>`;
        let result = await rollOut('тесто');
        povar.workTable.innerHTML += `<p>${result}</p>`;
        if (type === 'vegan') {
            result = await addMushrooms(result);
        } else {
            result = await addSalami(result);
        }
        povar.workTable.innerHTML += `<p>${result}</p>`;
        result = await addTomato(result);
        povar.workTable.innerHTML += `<p>${result}</p>`;
        if (type === 'vegan') {
            result = await addVСheese(result);
        } else {
            result = await addCheese(result);
        }
        povar.workTable.innerHTML += `<p>${result}</p>`;

        result = await bake(result, povar);

        povar.workTable.innerHTML += `<h4>${result}</h4>`;
    } catch (error) {
        povar.workTable.innerHTML += `<h4 class="error">${error}</h4>`;
    }
}

function rollOut(testo) {
    return new Promise((resolve, reject) => {
        if (skalka && testo) {
            let result = `раскатанное ${testo}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу расскатать тесто');
        }
    });
}

function addSalami(halfPizza) {
    let salami = slicedSalami.pop();
    renderProducts();
    return new Promise((resolve, reject) => {
        if (salami && halfPizza) {
            let result = `${halfPizza} + ${salami}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу добавить салями');
        }
    });
}
function addMushrooms(halfPizza) {
    let mushrooms = slicedMushrooms.pop();
    renderProducts();
    return new Promise((resolve, reject) => {
        if (mushrooms && halfPizza) {
            let result = `${halfPizza} + ${mushrooms}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу добавить шампиньоны');
        }
    });
}
function addTomato(halfPizza) {
    let tomato = slicedTomatos.pop();
    renderProducts();
    return new Promise((resolve, reject) => {
        if (tomato && halfPizza) {
            let result = `${halfPizza} + ${tomato}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу добавить помидоры');
        }
    });
}
function addCheese(halfPizza) {
    let cheese = slicedCheese.pop();
    renderProducts();
    return new Promise((resolve, reject) => {
        if (cheese && halfPizza) {
            let result = `${halfPizza} + ${cheese}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу добавить сыр');
        }
    });
}
function addVСheese(halfPizza) {
    let vCheese = slicedVCheese.pop();
    renderProducts();
    return new Promise((resolve, reject) => {
        if (vCheese && halfPizza) {
            let result = `${halfPizza} + ${vCheese}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу добавить веганский сыр');
        }
    });
}
function bake(halfPizza, povar) {
    let indexOven = ovens.indexOf(null);

    return new Promise((resolve, reject) => {
        if (povar && halfPizza && indexOven !== -1) {
            let oven = document.querySelector(`.oven${indexOven + 1}`);
            oven.innerHTML = `<h2>${povar.name}</h2><h4>Запекается</h4>`;
            ovens[indexOven] = 'занятая печь';
            let result = 'запечёная пицца';
            setTimeout(
                () => {
                    oven.innerHTML = '';
                    ovens[indexOven] = null;
                    resolve(result);
                },
                rnd(10000, 15000),
                result
            );
        } else {
            reject('Не могу положить в печь');
        }
    });
}

function rnd(min = 1000, max = 10000) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
