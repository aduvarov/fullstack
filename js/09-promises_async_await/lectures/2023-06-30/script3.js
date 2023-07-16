'use strict';

// 1. Снять фотографию - результат цветное фото
// 2. Применить фильтр ч/б к фото - результат чёрно-белое фото
// 3. Применить фильтр сепия к фото - результат красивое фото
// 4. Отправить фото по email

let photo = new Promise((resolve, reject) => {
    let result = snapshot();
    resolve(result);
});

photo
    .then(photo => {
        let result = filterBW(photo);
        return result;
    })
    .then(bw => {
        let result = filterSepia(bw);
        return result;
    })
    .then(sepia => {
        return sendPhoto(sepia);
    })
    .then(photo => {
        console.log(photo);
    })
    .catch(error => {
        console.log(error);
    });

function snapshot() {
    console.log(`Снимаем фотографию...`);
    let result = 'цветное фото';
    return result;
}

function filterBW(photo) {
    console.log(`Применяем чб фильтр к ${photo}`);
    let result = `чб фото`;
    return result;
}

function filterSepia(photo) {
    console.log(`Применяем фильтр сепия к ${photo}`);
    let result = `красивое фото`;
    return result;
}

function sendPhoto(photo) {
    console.log(`Отправляем ${photo} по почте...`);
    let result = `done`;
    return result;
}
