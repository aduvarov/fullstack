'use strict';

let romanNum = 'III';

function romanToDec(romanNum) {
    let result = 0;
    for (let index = 0; index < romanNum.length; index++) {
        if (romanNum[index] === 'I' && romanNum[index + 1] === 'V') {
            result += 4;
            index += 1;
        } else if (romanNum[index] === 'I' && romanNum[index + 1] === 'X') {
            result += 9;
            index += 1;
        } else if (romanNum[index] === 'X' && romanNum[index + 1] === 'L') {
            result += 40;
            index += 1;
        } else if (romanNum[index] === 'X' && romanNum[index + 1] === 'C') {
            result += 90;
            index += 1;
        } else if (romanNum[index] === 'C' && romanNum[index + 1] === 'D') {
            result += 400;
            index += 1;
        } else if (romanNum[index] === 'C' && romanNum[index + 1] === 'M') {
            result += 900;
            index += 1;
        } else {
            switch (romanNum[index]) {
                case 'M':
                    result += 1000;
                    break;
                case 'D':
                    result += 500;
                    break;
                case 'C':
                    result += 100;
                    break;
                case 'L':
                    result += 50;
                    break;
                case 'X':
                    result += 10;
                    break;
                case 'V':
                    result += 5;
                    break;
                case 'I':
                    result += 1;
                    break;
            }
        }
    }
    return result;
}
