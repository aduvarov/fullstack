import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';

let agregate;

// readFile('bel.txt', 'utf-8')
//     .catch(error => {
//         console.error('OUR_ERROR:', error);
//         return error;
//     })
//     .then(data => {
//         agregate = data;
//     })
//     .then(() => {
//         return readFile('kaz.txt', 'utf-8');
//     })
//     .catch(error => {
//         console.error('OUR_ERROR:', error);
//         return error;
//     })
//     .then(data => {
//         agregate += data;
//         console.log(agregate);
//     });

// async function concatFiles() {
//     let belText;
//     let kazText;
//     try {
//         belText = await readFile('bel.txt', 'utf-8'); //
//     } catch (error) {
//         console.log('CATCH_BLOCK', error);
//     }
//     try {
//         kazText = await readFile('kaz.txt', 'utf-8');
//     } catch (error) {
//         console.log('CATCH_BLOCK', error);
//     }
//     agregate = belText + kazText;
//     console.log(agregate);
// }

// concatFiles();

// try {
//     console.log('TRY_BLOCK_START:');
//     Promise.reject('OUR_ERROR').catch(error => console.error('123', error));
//     console.log('TRY_BLOCK_END:');
// } catch (error) {
//     console.log('CATCH_BLOCK_START:');
//     console.error('catch', error);
//     console.log('CATCH_BLOCK_END:');
// }
///'TRY_BLOCK_START:
// 'TRY_BLOCK_END:'
// 123...

// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 10000, { userID: 1, username: 'vasya' });
//     });
// }

// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 10000, { filmID: 1345, filmLength: 360 });
//     });
// }

// async function getResults() {
//     let timeStart = Date.now();
//     console.log(`timeStart: ${timeStart}`);
//     let result1 = await fetchData1();
//     let result2 = await fetchData2();
//     console.dir(result1);
//     console.dir(result2);
//     let timeEnd = Date.now();
//     console.log(`timeEnd: ${timeEnd} delta: ${timeEnd - timeStart}`);
// }

// function getResults() {
//     let timeStart = Date.now();
//     console.log(`timeStart: ${timeStart}`);
//     fetchData1().then(answer => console.log(answer));
//     fetchData2().then(answer => console.log(answer));
//     let timeEnd = Date.now();
//     console.log(`timeEnd: ${timeEnd} delta: ${timeEnd - timeStart}`);
// }

// getResults();
// console.log(1);

async function concatFiles() {
    let belText;
    let kazText;
    try {
        belText = await readFile('bel.txt', 'utf-8'); //
    } catch (error) {
        console.log('CATCH_BLOCK', error);
    }
    try {
        kazText = await readFile('kaz.txt', 'utf-8');
    } catch (error) {
        console.log('CATCH_BLOCK', error);
    }
    agregate = belText + kazText;
    writeFile('./agregate.txt', agregate);
}

concatFiles();
// file1 - email.txt
// file2 - phonenumbers.txt
// file3 - sites.txt
