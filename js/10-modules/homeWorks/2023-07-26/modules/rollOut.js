import { skalka } from '../script.js';
import { rnd } from './rnd.js';

export function rollOut(testo) {
    return new Promise((resolve, reject) => {
        if (skalka && testo) {
            let result = `раскатанное ${testo}`;
            setTimeout(resolve, rnd(), result);
        } else {
            reject('Не могу расскатать тесто');
        }
    });
}
