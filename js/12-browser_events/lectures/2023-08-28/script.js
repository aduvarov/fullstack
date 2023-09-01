'use strict';

/* 
События мыши:

click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
dblclick 
contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
mouseover / mouseout – когда мышь наводится на / покидает элемент.
mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
mousemove – при движении мыши.
События на элементах управления:

submit – пользователь отправил форму <form>.
focus – пользователь фокусируется на элементе, например нажимает на <input>.
Клавиатурные события:

keydown и keyup – когда пользователь нажимает / отпускает клавишу.
События документа:

DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
CSS events:

transitionend – когда CSS-анимация завершена.
*/

// let btn = document.querySelector('.btn');
// console.log(btn.onclick);
// // btn.onclick = buttonClicked;
// console.log(btn.onclick);
// // btn.onclick = btnClicked;
// console.log(btn.onclick);
// // btn.onclick = null;
// // console.log(btn.onclick);

// console.log(btn.onclick);

// function buttonClicked() {
//     // test comment
//     // ...
//     //...
//     console.log('Clicked! ONE');
// }

// function btnClicked(event) {
//     console.log(this.innerText);
//     console.log('BTN CLICKED! TWO');
//     console.dir(event);
//     console.log(event.currentTarget.innerText);
//     console.log(this === event.currentTarget);
//     console.log(event.clientX, event.clientY);
// }

// let namedArrow = () => {
//     console.log(this);
//     console.log('BTN CLICKED!! THREE');
// };

// function objectHandler() {
//     console.log('hello from object');
// }

// btn.addEventListener('click', namedArrow);

// btn.addEventListener('click', btnClicked, {
//     //once: true,
//     // capture:
//     // passive: true
// });
// btn.addEventListener('click', buttonClicked);

// let btnRemove = document.querySelector('.btnRemove');

// btn.addEventListener('click', {
//     handleEvent: objectHandler,
// });

// btnRemove.addEventListener('click', () => {
//     btn.removeEventListener('click', buttonClicked);
//     btn.removeEventListener('click', namedArrow);
//     // btn.removeEventListener('click', btnClicked);
// });

// btn.addEventListener('click', function (event) {
//     console.log('btn: ', btn);
//     event.clientX;
//     console.log(' event.clientX: ', event.clientX);
//     event.clientY;
//     console.log(' event.clientX: ', event.clientY);
// });

let horse = document.querySelector('#horse');
let osel = document.querySelector('#osel');
let cat = document.querySelector('#cat');

let pane = document.querySelectorAll('.pane');

pane.forEach(e => {
    e.insertAdjacentHTML('beforeend', '<button class="delete">Удалить</button>');
});

let deleted = document.querySelectorAll('.delete');

deleted.forEach(e => {
    e.addEventListener('click', event => {
        e.parentNode.remove();
    });
});
