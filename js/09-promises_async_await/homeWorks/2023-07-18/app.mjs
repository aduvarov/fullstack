import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';

let agregate;

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
    numbers();
    email();
    urls();
}

async function urls() {
    try {
        agregate = await readFile('agregate.txt', 'utf-8');
    } catch (error) {
        console.log('CATCH_BLOCK', error);
    }
    let re = /\w+:\/\/\w+\.\w+\.?(\w+)?\.?(\w+)?(.+)?/g;
    let result = agregate.match(re);
    for (let i = 0; i < result.length; i++) {
        result[i] = `${result[i].trim()} \n`;
    }
    console.log('result: ', result);
    writeFile('./urls.txt', result);
}

async function email() {
    try {
        agregate = await readFile('agregate.txt', 'utf-8');
    } catch (error) {
        console.log('CATCH_BLOCK', error);
    }
    let re = /(\w+(.|-)?\w+(.|-)?\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/g;
    let result = agregate.match(re);
    for (let i = 0; i < result.length; i++) {
        result[i] = `${result[i].trim()} \n`;
    }
    console.log('result: ', result);
    writeFile('./emails.txt', result);
}

async function numbers() {
    try {
        agregate = await readFile('agregate.txt', 'utf-8');
    } catch (error) {
        console.log('CATCH_BLOCK', error);
    }
    let re = /\+\d+\s?\(?\d+\)?(\s|-)?\d+(\s|-)?\d+(\s|-)?\d+(\s|-)?\d+/g;
    let result = agregate.match(re);
    for (let i = 0; i < result.length; i++) {
        result[i] = `${result[i].trim()} \n`;
    }
    console.log(result);
    writeFile('./numbers.txt', result);
}

concatFiles();
