// Написать функцию которая принимает строку и подсчитывает сколько каждая из цифр повторяется в этой строке. Функция должна возвращать новый объект с расчётами.
// Например: countDigits('4779872349834') //
'use strict';

let countDigits = '4779872349834';

let result = numbers(countDigits);
console.log(result);

function numbers(countDigits) {
    let result = {
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0,
        number5: 0,
        number6: 0,
        number7: 0,
        number8: 0,
        number9: 0,
        number0: 0,
    };
    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;
    let number5 = 0;
    let number6 = 0;
    let number7 = 0;
    let number8 = 0;
    let number9 = 0;
    let number0 = 0;
    for (let count = 0; count < countDigits.length; count++) {
        if (countDigits[count] === 1) {
            number1++;
        }
        if (countDigits[count] == 2) {
            number2++;
        }
        if (countDigits[count] == 3) {
            number3++;
        }
        if (countDigits[count] == 4) {
            number4++;
        }
        if (countDigits[count] == 5) {
            number5++;
        }
        if (countDigits[count] == 6) {
            number6++;
        }
        if (countDigits[count] == 7) {
            number7++;
        }
        if (countDigits[count] == 8) {
            number8++;
        }
        if (countDigits[count] == 9) {
            number9++;
        }
        if (countDigits[count] == 0) {
            number0++;
        }
    }

    result.number1 = number1;
    result.number2 = number2;
    result.number3 = number3;
    result.number4 = number4;
    result.number5 = number5;
    result.number6 = number6;
    result.number7 = number7;
    result.number8 = number8;
    result.number9 = number9;
    return result;
}
