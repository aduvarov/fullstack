'use strict';

const content1 = document.querySelector('.container__content1');
const content2 = document.querySelector('.container__content2');

let start = new Date().getTime();

scrub('картофель', scrubbed => {
    slice(scrubbed, sliced => {
        fry(sliced, fried => {
            serve(fried, portion => {
                let end = new Date().getTime();
                content1.innerHTML += `${portion}, ${(end - start) / 1000} seconds <br>`;
            });
        });
    });
});

breakEggs('яйца', breaked => {
    shakeEggs(breaked, shaked => {
        fryEggs(shaked, fried => {
            serveEggs(fried, portion => {
                let end = new Date().getTime();
                content2.innerHTML += `${portion}, ${(end - start) / 1000} seconds <br>`;
            });
        });
    });
});

let end = new Date().getTime();

let time = end - start;

console.log(time / 1000);
/////////////////////////////////////////

function scrub(vegetables, nextStepFunction) {
    content1.innerHTML += `Повар №1. Действие. Чистим ${vegetables} <br>`;
    let result = `очищеный ${vegetables}`;
    setTimeout(nextStepFunction, 4500, result);
}

function slice(product, nextStepFunction) {
    content1.innerHTML += `Повар №1. Действие. Нарезаем ${product} <br>`;
    let result = `нарезанный ${product}`;
    setTimeout(nextStepFunction, 1500, result);
}

function fry(product, nextStepFunction) {
    content1.innerHTML += `Повар №1. Действие. Жарим ${product}<br>`;
    // throw new Error('Плитка отказала');
    let result = `пожаренный ${product}`;
    setTimeout(nextStepFunction, 5000, result);
}

function serve(product, nextStepFunction) {
    content1.innerHTML += `Повар №1. Действие. Подаём ${product}<br>`;
    let result = `порция ${product}`;
    setTimeout(nextStepFunction, 1000, result);
}

///////////////////////////
function breakEggs(eggs, nextStepFunction) {
    content2.innerHTML += `Повар №2. Действие. разбиваем ${eggs}<br>`;
    let result = `разбитые ${eggs}`;
    setTimeout(nextStepFunction, 1000, result);
}
function shakeEggs(eggs, nextStepFunction) {
    content2.innerHTML += `Повар №2. Действие. взбиваем ${eggs}<br>`;
    let result = `взбитые ${eggs}`;
    setTimeout(nextStepFunction, 3500, result);
}
function fryEggs(eggs, nextStepFunction) {
    content2.innerHTML += `Повар №2. Действие. жарим ${eggs}<br>`;
    let result = `пожаринные ${eggs}`;
    setTimeout(nextStepFunction, 4400, result);
}
function serveEggs(eggs, nextStepFunction) {
    content2.innerHTML += `Повар №2. Действие. подаём ${eggs}<br>`;
    let result = `порция ${eggs}`;
    setTimeout(nextStepFunction, 2000, result);
}

function sleep(milliseconds) {
    let t = new Date().getTime(); // 567
    let i = 0;
    while (new Date().getTime() - t < milliseconds) {
        i++;
    }
}

// читать и смотреть видео про колбэк хэлл
