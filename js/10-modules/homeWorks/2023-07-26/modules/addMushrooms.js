import { renderProducts, slicedMushrooms } from '../script.js';
import { rnd } from './rnd.js';

export function addMushrooms(halfPizza) {
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
