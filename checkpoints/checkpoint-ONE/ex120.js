'use strict';

//В компьютер по очереди поступают результаты спорт­
// сменов-участников соревнований по лыжным гонкам (через prompt()), уже при-
// шедших к финишу (время, затраченное на прохождение дистан-
// ции гонки в сек.). Выводить на экран (console.log()) лучший результат после ввода
// результата очередного спортсмена. Заканчивать программу по нажатии кнопки отмена.

function bestResultAtlete() {
    let results = [];
    let resultAthlete = 0;
    let best = 0;
    let contin = true;
    while (contin) {
        resultAthlete = prompt('Введите затраченное время');
        if (resultAthlete === null) {
            contin = false;
        }
        resultAthlete = +resultAthlete;
        if (isNaN(resultAthlete)) {
            console.log('Ошибка: Введены не числовые данные');
            continue;
        }
        results.push(resultAthlete);
        if (results.length === 1) {
            best = results[0];
        } // 22, 15, 13
        for (let index = 1; index < results.length; index++) {
            if (best > results[index]) {
                best = results[index];
            }
        }
        console.log(best);
    }

    // for (let index = 0; index < 5; index++) {
    // resultAthlete = +prompt('Введите затраченное время');
    // if (resultAthlete === 0) {
    //     return null;
    // }
    //     results.push(resultAthlete);
    //     for (let index = 0; index < results.length; index++) {
    //         if (results[index] < results[index + 1]) {
    //             best = results[index + 1];
    //         }
    //     }
    // console.log(best);
    // }
    //
}
