'use strict';

// 1. Записать видеофайл размером 2Гб
// 2. Отредактировать видеофайл до размера 1Гб
// 3. Загрузить видео на YouTUBE
// 4. Поделиться ссылкой в соцсетях

recordVideo(rawvideo => {
    editVideo(rawvideo, editedvideo => {
        uploadVideo(editedvideo, link => {
            shareLink(link, console.log);
        });
    });
});

function recordVideo(callback) {
    console.log(`записал видио в 2ГБ`);
    let result = 'rawvideo2GB';
    callback(result);
} //rawvideo2GB

function editVideo(rawvideo, callback) {
    console.log(`Отредактировал ${rawvideo}`);
    let result = 'editedVideo1GB';
    callback(result);
} //editedVideo1GB

function uploadVideo(editedvideo, callback) {
    console.log(`Загрузил ${editedvideo} на YouTUBE`);
    let result = 'https://www.youtube.com/live/XFn-nC-YZg8?feature=share';
    callback(result);
} //link

function shareLink(link, callback) {
    console.log(`Поделился ${link} в соцсетях`);
    let result = 'done';
    callback(result);
}
//done
