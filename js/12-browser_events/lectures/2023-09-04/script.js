'use strict';

let btn = document.querySelector('.btn');
let link = document.querySelector('.link');

btn.addEventListener('click', e => {
    console.log(`click - ${e.button}`);
    console.log(`shift-${e.shiftKey} alt-${e.altKey} ctrl-${e.ctrlKey} meta-${e.metaKey}`);
});

btn.addEventListener('mousedown', e => {
    console.log(`mousedown - ${e.button}`);
});
btn.addEventListener('mouseup', e => {
    console.log(`mouseup - ${e.button}`);
});
btn.addEventListener('dblclick', e => {
    console.log(`dblclick`);
});
btn.addEventListener('contextmenu', e => {
    console.log(`contextmenu`);
});
btn.addEventListener('mousewheel', e => {
    console.log(`mousewheel ${e.wheelDelta}`);
});
// btn.addEventListener('mouseover', e => {
//     console.log(`mouseover - related ${e.relatedTarget.nodeName} target ${e.target.nodeName} `);
// });
// btn.addEventListener('mouseout', e => {
//     console.log(`mouseout - target ${e.target.nodeName} related ${e.relatedTarget.nodeName}`);
// });
// btn.addEventListener('mousemove', e => {
//     console.log(`mousemove - x=${e.clientX} y=${e.clientY}`);
//     console.log(`mousemove - Экран x=${e.screenX} y=${e.screenY}`);
// });

link.addEventListener('click', e => {
    console.clear();
});
