'use strcit';

//ex053:
// Дано трехзначное число. Определить, равен ли квадрат этого числа сумме кубов его цифр.

let m = 424;

function number(m) {
    let num1 = Number(m.toString()[0]);
    let num2 = Number(m.toString()[1]);
    let num3 = Number(m.toString()[2]);
    let squareNum = m ** 2;
    let cubeNum = num1 ** 3 + num2 ** 3 + num3 ** 3;
    if (squareNum === cubeNum) {
        return true;
    } else {
        return false;
    }
}
