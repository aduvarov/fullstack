'use strict';

console.log('js' + 90, 'You answer: js90');
console.log('js' + true, 'You answer: jstrue');
console.log('js' + undefined, 'You answer: jsundefined ');
console.log('js' + null, 'You answer: jsnull');
console.log('' + 15, 'You answer:15');
console.log('5' + 10, 'You answer: 510');
console.log(+'5' + 15, 'You answer: 20');
console.log(+true, 'You answer: 1');
console.log(+'true', 'You answer: 1');
console.log(+undefined, 'You answer: NaN');
console.log(+'5' * 10, 'You answer: 50');
console.log('5' * 10, 'You answer: 50');
console.log(5 * +'10' + Number(undefined), 'You answer: NaN');
