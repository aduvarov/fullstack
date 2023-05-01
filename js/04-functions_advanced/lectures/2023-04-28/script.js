'use strict';
// spread оператор распространения
// let x = 5;
// let y = 500;

// const mutate = (x, y) => {
//     // x = 500, y = 5
//     x = x * 2; //1000
//     y = y * 3; // 15
//     return y;
// };

// console.log(mutate(y, x)); // console.log(mutate(500, 5))
/// 0x5058584: ['cherry', 'strawberry', 'raspberry']

// let basket1 = [
//     'banana',
//     'orange',
//     'apple',
//     ['strawberry', 'raspberry', ['cherry-red', 'cherry-yellow', [1, 2, [[3, [[[[[4]]]]]]]]]],
//     'watermelon',
// ];
// let basket2 = [];
// function recursiveArrayCopy(srcArray, dstArray) {
//     for (let index = 0; index < srcArray.length; index++) {
//         if (Array.isArray(srcArray[index])) {
//             dstArray[index] = [];
//             recursiveArrayCopy(srcArray[index], dstArray[index]);
//         } else {
//             dstArray.push(srcArray[index]);
//         }
//     }
// }
// recursiveArrayCopy(basket1, basket2);
// basket2.push('lemon');
// basket1[3].unshift('blueberry');
// console.log('basket2: ', basket2);
// console.log('basket1: ', basket1);

// let basket1 = [
//     'banana',
//     'orange',
//     'apple',
//     ['strawberry', 'raspberry', ['cherry-red', 'cherry-yellow', [1, 2, [[3, [[[[[4]]]]]]]]]],
//     'watermelon',
// ];

// let basket3 = [...basket1];
// basket3 = Array.from(basket1)
// basket3.concat(basket1);

// console.log(basket3);

// let basket1 = ['banana', 'orange'];
// let basket2 = ['lemon', 'watermelon'];

// console.log('basket3: ', basket3);
