'use strict';

// 5*6+7

function add(x, y, cb) {
    let result = x + y;
    cb(result);
}

function mul(x, y, cb) {
    let result = x * y;
    cb(result);
}

mul(5, 6, res => {
    add(res, 7, console.log);
});
