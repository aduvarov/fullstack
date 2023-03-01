'use strict';

let result1 = (16).toString(16);
console.log('result1: ', result1);

let result2 = (0x15).toString(16);
console.log('result2: ', result2);

let result3 = 300 / (15 - 0x0f);
console.log('result3: ', result3);

let result4 = 42 - 0b00010110;
console.log('result4: ', result4);

let result5 = 0b00010111 - 0b00010110;
console.log('result5: ', result5);

let result6 = isNaN(42 - 0x01);
console.log('result6: ', result6);

let result7 = isFinite(42 - 0x01);
console.log('result7: ', result7);

let result8 = parseFloat('123.456h');
console.log('result8: ', result8);

let result9 = parseFloat('0x10.456') + parseInt('0x10.456') - parseFloat('1,2');
console.log('result9: ', result9);

let result10 = parseInt('150px + 50px');
console.log('result10: ', result10);

let result11 = parseInt('150px') + parseInt('50px');
console.log('result11: ', result11);

let result12 = Math.floor(-2.1);
console.log('result12: ', result12);

let result13 = Math.round(42.5);
console.log('result13: ', result13);

let result14 = (21.521).toFixed(1) + Math.trunc(5.5);
console.log('result14: ', result14);

let result15 = Math.trunc(Math.random());
console.log('result15: ', result15);
