import { renderProducts, slicedSalami } from '../script.js';
import { rnd } from './rnd.js';

export function addSalami(halfPizza) {
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
