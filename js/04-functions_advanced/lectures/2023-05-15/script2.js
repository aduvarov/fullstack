'use strict';

let product = {
    name: 'Redmi', // {writable: true, enumerable: true, configurable: true, value: 'Redmi'}
    type: 'smartphone',
    model: 'Note 12 Pro Plus',
    _priceUSD: 444,
};

console.log(Object.keys(product));
// for (let key in product) {
//     console.log(product[key]);
// }

// let descriptor = Object.getOwnPropertyDescriptor(product, 'name');
// console.log('descriptor: ', descriptor);

Object.defineProperty(product, 'name', { writable: false, enumerable: false });
console.log(Object.keys(product));
// descriptor = Object.getOwnPropertyDescriptor(product, 'name');
// console.log('descriptor: ', descriptor);

// for (let key in product) {
//     console.log(product[key]);
// }

// Object.getOwnPropertyDescriptor(product, 'name')
// Object.defineProperty(product, 'name', { writable: false, enumerable: false });
// Object.preventEntensions(product)
// Object.seal(product) //
// Object.freeze(product);
// Object.isExtensible(product)
// Object.isSealed(product)
// Object.isFrozen(product)

product.priceBYN = 300;
console.log('Helloworld!');
