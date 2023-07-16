'use strict';

// devlab.kz [185.22.64.25]
// mail.ru [217.69.139.202]
// google.com [192.178.25.174]

// DNS (Domain Name System)

// .

// .kz
// .by
// .gov.by
// .mas.gov.by
// .ru
// .com
// .gov
// .org

// http://devlab.kz/~misha/

// https://devlab.kz/~auvarov/2022-11-03/index_1.html

// fetch('https://devlab.kz/~auvarov/2022-11-03/index_1.html').catch(error => {
//     console.error(error);
// });

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
fetch(url)
    .then(response => {
        console.log('---HTTP HEADERS OF RESPONSE---');
        console.dir(
            response.headers.forEach((value, key, parent) => {
                console.log(`${key}:${value}`);
            })
        );
        return response.json();
    })
    .then(json => {
        console.log(json);
    });

// .then(response => {
//     let body = document.querySelector('body');
//     body.innerHTML += response;
//     console.dir(response);
// });
