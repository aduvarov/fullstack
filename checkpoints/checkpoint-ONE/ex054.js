'use strict';

//ex054:
// Дано трехзначное число:
// а) верно ли, что все его цифры одинаковые;
// б) определить, есть ли среди его цифр одинаковые.
// Результат в виде объекта например
// { allNumsEquals: true, anyEquals: true }

let m = 423;

function numsEquals(m) {
    let num1 = Number(m.toString()[0]);
    let num2 = Number(m.toString()[1]);
    let num3 = Number(m.toString()[2]);
    if (num1 === num2 && num2 === num3) {
        return { allNumsEquals: true };
    } else if (num1 === num2) {
        return { allNumsEquals: false, anyEquals: true };
    } else if (num2 === num3) {
        return { allNumsEquals: false, anyEquals: true };
    } else if (num3 === num1) {
        return { allNumsEquals: false, anyEquals: true };
    } else {
        return { allNumsEquals: false, anyEquals: false };
    }
}
