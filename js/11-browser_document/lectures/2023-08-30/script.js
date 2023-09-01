'use strict';

let dHeight = document.querySelector('.displayHeight');
let dWidth = document.querySelector('.displayWidth');
let devicePixelRatio = document.querySelector('.devicePixelRatio');
let windowInnerWidth = document.querySelector('.windowInnerWidth');
let windowInnerHeight = document.querySelector('.windowInnerHeight');

dHeight.innerHTML = window.outerHeight;
dWidth.innerHTML = window.outerWidth;
devicePixelRatio.innerHTML = window.devicePixelRatio;

windowInnerHeight.innerHTML = window.innerHeight;
windowInnerWidth.innerHTML = window.innerWidth;
document.body.append(window.screen.orientation.angle);
