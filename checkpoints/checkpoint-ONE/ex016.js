'use strict';

//Известна стоимость 1 кг конфет (30 руб), печенья (15 руб) и яблок (3 руб). Найти стоимость всей покупки, если купили x кг конфет, у кг печенья и z кг яблок. (x, y, z) входящие параметры у функции

let sweets = 6;
let cookies = 4;
let apples = 5;
let result = purchasePrice(sweets, cookies, apples);
function purchasePrice(x, y, z) {
    let sum = x * 30 + y * 15 + z * 3;
    return sum;
}
