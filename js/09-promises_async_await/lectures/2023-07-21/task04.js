'use strict';

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
});

promise1.then(res => {
    console.log(2);
});

console.log('end');

/*


start 
1 
end

*/
