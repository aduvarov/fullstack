'use strict';

//С начала суток часовая стрелка повернулась на y градусов (0 ≤ y < 360). Определить число полных
// часов и число полных минут, прошедших с начала суток.
// Результат в виде объекта.

let degree = 47;
let hours = 0;
let minutes = 0;
while (degree >= 30) {
    degree -= 30;
    hours++;
}
if (degree < 30) {
    minutes = degree * 2;
}

console.log({ hours: hours, minutes: minutes });
