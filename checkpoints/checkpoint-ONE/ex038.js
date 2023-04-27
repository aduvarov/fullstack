'use strcit';

//Дано натуральное число n (n > 999). Найти:
// а) число сотен в нем;
// б) число тысяч в нем.
// Результат в виде объекта

let num = 3224;

function number(num) {
    let thousands = Math.trunc(num / 1000);
    let hundreds = Math.trunc(num % 1000);
    hundreds = Math.trunc(hundreds / 100);
    return { thousands: thousands, hundreds: hundreds };
}
