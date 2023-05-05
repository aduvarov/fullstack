'use strict';

const matreshka = function (depth) {
    if (depth === 1) {
        console.log(`Неделимая матрёшка #${depth}`);
    } else {
        console.log(`Верхняя половина матрёшки #${depth}`);
        matreshka(depth - 1);
        console.log(`Нижняя половина матрёшки #${depth}`);
    }
};

matreshka(55);
