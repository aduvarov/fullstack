import { addCheese, addVCheese } from './modules/addCheeses.js';
import { addMushrooms } from './modules/addMushrooms.js';
import { addSalami } from './modules/addSalami.js';
import { addTomato } from './modules/addTomato.js';
import { bake } from './modules/bake.js';
import { rollOut } from './modules/rollOut.js';

let povars = [
    { name: 'Иван', workTable: undefined, expectation: 0 },
    { name: 'Мария', workTable: undefined, expectation: 0 },
    { name: 'Михаил', workTable: undefined, expectation: 0 },
    { name: 'Наталья', workTable: undefined, expectation: 0 },
];

povars.forEach((povar, index) => (povar.workTable = document.querySelector(`.workTable${index + 1}`)));
console.log('povars: ', povars);

export let ovens = Array(2).fill(null);

export let slicedTomatos = Array(4).fill('порезанные помидоры');
export let slicedSalami = Array(4).fill('салями');
export let slicedMushrooms = Array(4).fill('шампиньоны');
export let slicedCheese = Array(4).fill('сыр');
export let slicedVCheese = Array(4).fill('веганский сыр');
export let skalka = true;

renderProducts();

makePizza(povars[0], 'margarita');
makePizza(povars[1], 'vegan');
makePizza(povars[2], 'margarita');
makePizza(povars[3], 'margarita');
//oven.innerHTML += `<h2>Иван</h2><h4>пица запекается</h4>`;

export function renderProducts() {
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
            result = await addVCheese(result);
        } else {
            result = await addCheese(result);
        }
        povar.workTable.innerHTML += `<p>${result}</p>`;

        result = await bake(result, povar);
    } catch (error) {
        povar.workTable.innerHTML += `<h4 class="error">${error}</h4>`;
    }
}
