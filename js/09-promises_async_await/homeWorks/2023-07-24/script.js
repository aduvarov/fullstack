import { realBoard } from "./module/realboard.js";

let hexade_num1 = document.querySelector('.hexade_num1');
let hexade_num2 = document.querySelector('.hexade_num2');

let decimalNum1 = document.querySelector('.decimal_num1');
let decimalNum2 = document.querySelector('.decimal_num2');
let decimalNum3= document.querySelector('.decimal_num3');

let binary_num1 = document.querySelector('.binary_num1');
let binary_num2 = document.querySelector('.binary_num2');
let binary_num3= document.querySelector('.binary_num3');
let binary_num4 = document.querySelector('.binary_num4');
let binary_num5 = document.querySelector('.binary_num5');
let binary_num6 = document.querySelector('.binary_num6');
let binary_num7 = document.querySelector('.binary_num7');
let binary_num8 = document.querySelector('.binary_num8');

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let viewBoard = [];
for (let i = 1; i < 4; i++) {
    viewBoard.push(document.querySelector(`.decimal_num${i}`));
}
for (let i = 1; i < 3; i++) {
    viewBoard.push(document.querySelector(`.hexade_num${i}`));
}
for (let i = 1; i < 9; i++) {
    viewBoard.push(document.querySelector(`.binary_num${i}`));
    
}


function renderNumber() {
    realBoard.forEach((e, i) => {
        viewBoard[i].innerText = e;
    });
}

plus.addEventListener('click', () => {
    let arr = [];
     realBoard[0]= +decimalNum1.innerHTML;
     realBoard[1]= +decimalNum2.innerHTML;
     realBoard[2]= +decimalNum3.innerHTML;
    if (realBoard[2]=== 2 && realBoard[1] === 5) {
        if (realBoard[0]< 5) {
            realBoard[0]= realBoard[0]+ 1;
        }
    } else {
        if (realBoard[0]< 9) {
            realBoard[0]= realBoard[0]+ 1;
        } else {
            if (realBoard[1]< 5) {
                realBoard[1]++;
                realBoard[0]= 0;
            } else {
                if (realBoard[2]< 3) {
                    realBoard[2]++;
                    realBoard[1]= 0;
                    realBoard[0]= 0;
                }
            }
        }
    }
    arr.push(realBoard[0], realBoard[1], realBoard[2]);
    for(let i = 0;i < 3;i++){
        realBoard[i] = +arr[i]
    }
    let result = arr.reverse().join('');
    result = +result;
    arr = result.toString(2).split('').reverse();
    if (arr.length < 8) {
        for (let i = arr.length; arr.length < 8; i++) {
            arr.push(0);
        }
    }
    let index = 0;
    for(let i = 5;i < 12;i++){
        realBoard[i] = +arr[index]
        index++
    }

    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    index = 0;
    for(let i = 3;i < 5;i++){
        realBoard[i] = arr[index]
        index++
    }
   renderNumber()
});

minus.addEventListener('click', () => {
    let arr = [];
     realBoard[0]= +decimalNum1.innerHTML;
     realBoard[1]= +decimalNum2.innerHTML;
    realBoard[2]= +decimalNum3.innerHTML;
    if (realBoard[0]> 0) {
        realBoard[0]= +realBoard[0]- 1;
    } else {
        if (realBoard[1]> 0) {
            if (realBoard[0]> 0) {
                realBoard[0]= +realBoard[0]- 1;
            } else {
                realBoard[1]--;
            }
            realBoard[0]= 9;
        } else {
            if (realBoard[0]> 0) {
                realBoard[0]= +realBoard[0]- 1;
            } else if (realBoard[1]> 0) {
                realBoard[1]= +realBoard[1]- 1;
            } else {
                if (realBoard[2]> 0) {
                    realBoard[2]--;
                    realBoard[1]= 9;
                    realBoard[0]= 9;
                }
            }
        }
    }
    arr.push(realBoard[0], realBoard[1], realBoard[2]);
    for(let i = 0;i < 3;i++){
        realBoard[i] = +arr[i]
    }
    let result = arr.reverse().join('');
    result = +result;
    arr = result.toString(2).split('').reverse();
    if (arr.length < 8) {
        for (let i = arr.length; arr.length < 8; i++) {
            arr.push(0);
        }
    }
    let index = 0;
    for(let i = 5;i < 12;i++){
        realBoard[i] = +arr[index]
        index++
    }

    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    index = 0;
    for(let i = 3;i < 5;i++){
        realBoard[i] = arr[index]
        index++
    }
   renderNumber()
});
