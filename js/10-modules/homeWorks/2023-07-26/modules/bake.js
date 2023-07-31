import { ovens } from '../script.js';
import { rnd } from './rnd.js';

export function bake(halfPizza, povar) {
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
                    povar.workTable.innerHTML += `<h4>${result}</h4>`;
                    resolve(result);
                },
                rnd(10000, 15000),
                result
            );
        } else if (halfPizza && povar) {
            povar.expectation += 5000;
            if (povar.expectation === 300000) {
                reject();
            } else {
                setTimeout(bake, rnd(5000), halfPizza, povar);
            }
        }
    });
}
