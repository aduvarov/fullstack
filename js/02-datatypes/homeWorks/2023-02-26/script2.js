'use strict';
let counter1 = 0;
let counter2 = 0;
let linearArray = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];
let result = countNumbers(linearArray);

console.log(linearArray);
console.log(counter1);
console.log(counter2);

function countNumbers(linearArray) {
    for (let index = 0; index < linearArray.length; index++) {
        if (linearArray[index] < 0) {
            counter1++;
        } else if (linearArray[index] > 0) {
            counter2++;
        }
    }
}
