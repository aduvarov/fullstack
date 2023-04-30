'use strcit';

//С начала суток прошло n секунд. Определить:
// а) сколько полных часов прошло с начала суток;
// б) сколько полных минут прошло с начала очередного часа;
// в) сколько полных секунд прошло с начала очередной минуты.
// Результат вернуть в виде объекта.

let seconds = 6045;

function times(seconds) {
    let hours = Math.trunc(seconds / 60 / 60);
    let minuts = Math.trunc((seconds - hours * 60 * 60) / 60);
    let sec = Math.trunc(seconds - (hours * 60 * 60 + minuts * 60));
    return { hours: hours, minuts: minuts, seconds: sec };
}
