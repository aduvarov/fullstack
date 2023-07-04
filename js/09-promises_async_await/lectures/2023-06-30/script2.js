'use strict';

// 1. Записать видеофайл размером 2Гб
// 2. Отредактировать видеофайл до размера 1Гб
// 3. Загрузить видео на YouTUBE
// 4. Поделиться ссылкой в соцсетях

// recordVideo(rawvideo => {
//     editVideo(rawvideo, editedvideo => {
//         uploadVideo(editedvideo, link => {
//             shareLink(link, console.log);
//         });
//     });
// });

let getVideo = new Promise((resolve, reject) => {
    let result = recordVideo();
    resolve(result);
});

getVideo
    .then(video => {
        let result = editVideo(video);
        return result;
    })
    .then(video => {
        let link = uploadVideo(video);
        return link;
    })
    .then(link => {
        console.log(link);
    })
    .catch(v => {
        console.log('catch');
        console.log(v);
    })
    .then(data => {
        console.log('next', data);
    });

function recordVideo() {
    console.log(`записал видио в 2ГБ`);
    let result = 'rawvideo2GB';
    return result;
} //rawvideo2GB

function editVideo(rawvideo) {
    console.log(`Отредактировал ${rawvideo}`);
    let result = 'editedVideo1GB';
    return result;
} //editedVideo1GB

function uploadVideo(editedvideo) {
    console.log(`Загрузил ${editedvideo} на YouTUBE`);
    let result = 'https://www.youtube.com/live/XFn-nC-YZg8?feature=share';
    return result;
} //link

function shareLink(link) {
    console.log(`Поделился ${link} в соцсетях`);
    let result = 'done';
    return result;
}
//done
