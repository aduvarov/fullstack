'use strict';

// pending;
// fulfield;
// rejected;

let promise = new Promise((resolve, reject) => {
    let result = true;
    let data = 'A';
    if (result === true) {
        resolve(data);
    } else {
        reject(new Error('error'));
    }
});

promise
    .then(data => {
        console.log(data); //A
        return data + data;
    })
    .catch(error => {
        console.error(error);
        return 'B';
    })
    .then(data => {
        console.log(data); //AA
        return data + data;
    })
    .then(data => {
        console.log(data); //AAAA
        throw new Error('errorInThen');
        return data + data;
    })
    .then(data => {
        console.log(data);
        return data + data;
    })
    .catch(error => console.error(error))
    .finally();

//
//
