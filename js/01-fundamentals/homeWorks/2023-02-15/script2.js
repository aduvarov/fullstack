'use strict';
//Андрей любит кататься на велосипеде. Поскольку Андрей знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Андрей, округленное до наименьшего значения.
//Написать функцию расчёта.
//Запросить у пользователя время которое он собирается кататься в часах.
//Показать ему округлённый до меньшего литраж

// "Вам необходимо взять с собой не меньше 1 литра воды".
// округление до меньшего надо делать с помощью функции Math.trunc()

let timeRide = +prompt('Введите кол-во часов которые сегодня планируете потратить на катание:');

let result = rideBike(timeRide);

document.write(result);

function rideBike(timeRide) {
    let water = Math.trunc(timeRide * 0.5);
    let result = 'Вам необходимо взять с собой не меньше ' + water + ' литра воды';
    return result;
}
