'use strict';

class OurArray extends Array {
    sort() {
        return 1;
    }
    getLast() {
        return this.at(-1);
    }
    getFirst() {
        return this[0];
    }
    getEveryThird() {
        let arr2 = [];
        for (let index = 0; index < this.length; index += 3) {
            arr2.push(this[index]);
        }
        return arr2;
    }
}

let arr1 = new OurArray();

console.log(arr1.getLast()); // 999

for (let count = 0; count < 100; count++) {
    arr1.push(randomInteger(0, 1000));
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
