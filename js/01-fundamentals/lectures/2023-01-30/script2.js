'use strict';

alert('Программа подсчёта массы продуктов из магазина');

let carrot;
let potato;
let butter;
let cheese;

carrot = Number(prompt('Сколько необходимо купить кг маркови'));
potato = Number(prompt('Сколько необходимо купить кг картофеля'));
butter = Number(prompt('Сколько необходимо купить кг масла'));
cheese = Number(prompt('Сколько необходимо купить кг сыра'));

let total = carrot + potato + butter + cheese;
alert('Вам придется нести ' + total + ' кг');
