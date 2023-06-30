'use strict';

// 1. Снять фотографию - результат цветное фото
// 2. Применить фильтр ч/б к фото - результат чёрно-белое фото
// 3. Применить фильтр сепия к фото - результат красивое фото
// 4. Отправить фото по email

snapshot(colorPhoto => {
    filterBW(colorPhoto, bwPhoto => {
        filterSepia(bwPhoto, photo => {
            sendPhoto(photo, console.log);
        });
    });
});

function snapshot(callback) {
    console.log(`Снимаем фотографию...`);
    let result = 'цветное фото';
    callback(result);
}

function filterBW(photo, callback) {
    console.log(`Применяем чб фильтр к ${photo}`);
    let result = `чб фото`;
    callback(result);
}

function filterSepia(photo, callback) {
    console.log(`Применяем фильтр сепия к ${photo}`);
    let result = `красивое фото`;
    callback(result);
}

function sendPhoto(photo, callback) {
    console.log(`Отправляем ${photo} по почте...`);
    let result = `done`;
    callback(result);
}
