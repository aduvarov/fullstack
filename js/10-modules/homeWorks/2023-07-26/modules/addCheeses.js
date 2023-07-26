import { renderProducts, slicedCheese, slicedVCheese } from '../script.js';
import { rnd } from './rnd.js';

export function addCheese(halfPizza) {
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

export function addVCheese(halfPizza) {
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
