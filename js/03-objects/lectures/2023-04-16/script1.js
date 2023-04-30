'use strict';

let fruits = ['banana', 'apple', 'banana', 'orange', 'grapefruit', 'apple', 'cherry', 'cherry', 'lemon', 'cherry'];

let uniqFruits = []; // ['banana', 'apple', 'orange', 'grapefruit', 'cherry', 'lemon']

let fruitsSet = new Set();

fruits.forEach(fruit => fruitsSet.add(fruit));

for (let fruit of fruitsSet.values()) {
    uniqFruits.push(fruit);
}
console.log(uniqFruits);
