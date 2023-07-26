'use strict';

let hexade_num1 = document.querySelector('.hexade_num1');
let hexade_num2 = document.querySelector('.hexade_num2');

let decimalNum1 = document.querySelector('.decimal_num1');
let decimalNum2 = document.querySelector('.decimal_num2');
let decimalNum3 = document.querySelector('.decimal_num3');

let binary_num1 = document.querySelector('.binary_num1');
let binary_num2 = document.querySelector('.binary_num2');
let binary_num3 = document.querySelector('.binary_num3');
let binary_num4 = document.querySelector('.binary_num4');
let binary_num5 = document.querySelector('.binary_num5');
let binary_num6 = document.querySelector('.binary_num6');
let binary_num7 = document.querySelector('.binary_num7');
let binary_num8 = document.querySelector('.binary_num8');

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
    let arr = [];
    let num1 = +decimalNum1.innerHTML;
    let num2 = +decimalNum2.innerHTML;
    let num3 = +decimalNum3.innerHTML;
    if (num3 === 2 && num2 === 5) {
        if (num1 < 5) {
            num1 = +num1 + 1;
        }
    } else {
        if (num1 < 9) {
            num1 = +num1 + 1;
        } else {
            if (num2 < 5) {
                num2++;
                num1 = 0;
            } else {
                if (num3 < 3) {
                    num3++;
                    num2 = 0;
                    num1 = 0;
                }
            }
        }
    }
    arr.push(num1, num2, num3);
    decimalNum1.innerHTML = arr[0];
    decimalNum2.innerHTML = arr[1];
    decimalNum3.innerHTML = arr[2];
    let result = arr.reverse().join('');
    result = +result;
    arr = result.toString(2).split('').reverse();
    if (arr.length < 8) {
        for (let i = arr.length; arr.length < 8; i++) {
            arr.push(0);
        }
    }
    binary_num1.innerHTML = arr[0];
    binary_num2.innerHTML = arr[1];
    binary_num3.innerHTML = arr[2];
    binary_num4.innerHTML = arr[3];
    binary_num5.innerHTML = arr[4];
    binary_num6.innerHTML = arr[5];
    binary_num7.innerHTML = arr[6];
    binary_num8.innerHTML = arr[7];
    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    hexade_num1.innerHTML = arr[0];
    hexade_num2.innerHTML = arr[1];
});

minus.addEventListener('click', () => {
    let arr = [];
    let num1 = +decimalNum1.innerHTML;
    let num2 = +decimalNum2.innerHTML;
    let num3 = +decimalNum3.innerHTML;
    if (num1 > 0) {
        num1 = +num1 - 1;
    } else {
        if (num2 > 0) {
            if (num1 > 0) {
                num1 = +num1 - 1;
            } else {
                num2--;
            }
            num1 = 9;
        } else {
            if (num1 > 0) {
                num1 = +num1 - 1;
            } else if (num2 > 0) {
                num2 = +num2 - 1;
            } else {
                if (num3 > 0) {
                    num3--;
                    num2 = 9;
                    num1 = 9;
                }
            }
        }
    }
    arr.push(num1, num2, num3);
    decimalNum1.innerHTML = arr[0];
    decimalNum2.innerHTML = arr[1];
    decimalNum3.innerHTML = arr[2];
    let result = arr.reverse().join('');
    result = +result;
    arr = result.toString(2).split('').reverse();
    if (arr.length < 8) {
        for (let i = arr.length; arr.length < 8; i++) {
            arr.push(0);
        }
    }
    binary_num1.innerHTML = arr[0];
    binary_num2.innerHTML = arr[1];
    binary_num3.innerHTML = arr[2];
    binary_num4.innerHTML = arr[3];
    binary_num5.innerHTML = arr[4];
    binary_num6.innerHTML = arr[5];
    binary_num7.innerHTML = arr[6];
    binary_num8.innerHTML = arr[7];
    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    hexade_num1.innerHTML = arr[0];
    hexade_num2.innerHTML = arr[1];
});
