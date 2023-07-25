import { sum, doubleSum, xxx, v1 } from './modules/module-01.js';
import { mul, doubleMul, xyz as fiveFiveFive, v1 as w1 } from './modules/module-02.js';
import { nodefaultPerson } from './modules/Person.js';
import bmw from './modules/Person.js';

console.log(sum(5, 6), doubleSum(5, 6));
console.log(mul(5, 6), doubleMul(5, 6));
console.log(fiveFiveFive, xxx);

console.log(v1, w1);

console.log(bmw, nodefaultPerson);
