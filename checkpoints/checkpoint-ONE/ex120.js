'use strict';

//В компьютер по очереди поступают результаты спорт­
// сменов-участников соревнований по лыжным гонкам (через prompt()), уже при-
// шедших к финишу (время, затраченное на прохождение дистан-
// ции гонки в сек.). Выводить на экран (console.log()) лучший результат после ввода
// результата очередного спортсмена. Заканчивать программу по нажатии кнопки отмена.

function bestResult() {
    let results = [];
    let resultAthlete = 0;

    for (let index = 0; index < 5; index++) {
        resultAthlete = +prompt('Введите затраченное время');
        results.push(resultAthlete);
    }
    let best = 0;
    for (let index = 0; index < results.length; index++) {
        if (results[index] > results[index + 1]) {
            best = results[index + 1];
        }
    }
    return best;
}
