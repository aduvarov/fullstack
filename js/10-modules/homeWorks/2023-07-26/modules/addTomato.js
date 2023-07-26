import { renderProducts, slicedTomatos } from '../script.js';
import { rnd } from './rnd.js';

export function addTomato(halfPizza) {
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
