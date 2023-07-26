'use strict';

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
}).then(data => console.log(data));

console.log('end');

/*

start
1
end 
2

*/
