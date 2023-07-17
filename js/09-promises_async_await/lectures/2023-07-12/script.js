'use strict';

let url = 'https://devlab.kz/async/index.html';
let body = document.querySelector('body');

fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
        let re = /<a.+>/gm;
        let urls = data.match(re);
        let urlsRe = /http.+txt/;
        for (let i = 0; i < urls.length; i++) {
            urls[i] = urls[i].match(urlsRe)[0];
        }
        let result = [];

        // a.forEach(url => {
        //     fetch(url)
        //         .then(response => response.text())
        //         .then(text => {
        //             result.push(text);
        //         });
        // });

        //Promise.all

        let arrayOfPromises = urls.map(url => {
            return fetch(url);
        });
        //arrayOfPromises.push(new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)));

        // Promise.all(arrayOfPromises).then(arrayOfResults => {
        //     console.log(arrayOfResults);
        //     arrayOfResults.forEach(response => {
        //         console.log(response.status);
        //     });
        // });

        Promise.allSettled(arrayOfPromises).then(arrayOfResults => {
            console.log(arrayOfResults);
            arrayOfResults.forEach(response => {
                if (response.status === 'rejected') {
                    throw new Error('Error: promise halted');
                }
            });
            console.log('render page');
        });

        console.log(result);
        return result;
    })
    .then(result => {
        // body.innerHTML += `<table border="1" class="table"></table>`;
        // let table = document.querySelector('.table');
        // for (let i = 0; i < a.length; i++) {
        //     a[i] = a[i].match(urlsRe)[0];
        //     table.innerHTML += `
        //             <tr><td>${a[i]}</td></tr>
        //         `;
        // }
    });

//Promise.all
//Promise.allSettled
//Promise.race
//Promise.any
//Promise.resove
//Promise.reject
