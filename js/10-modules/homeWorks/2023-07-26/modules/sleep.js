import { bake } from './bake.js';
import { rnd } from './rnd.js';

export function sleep(halfPizza, povar) {
    return (result = setTimeout(bake, rnd(5000), halfPizza, povar));
}
