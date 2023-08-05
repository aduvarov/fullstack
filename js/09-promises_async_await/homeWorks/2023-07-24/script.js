import { realBoard } from './module/realboard.js';

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

    if (realBoard[2] === 2 && realBoard[1] === 5) {
        if (realBoard[0] < 5) {
            realBoard[0] = realBoard[0] + 1;
        }
    } else {
        if (realBoard[0] < 9) {
            realBoard[0] = realBoard[0] + 1;
        } else {
            if (realBoard[1] < 5) {
                realBoard[1]++;
                realBoard[0] = 0;
            } else {
                if (realBoard[2] < 3) {
                    realBoard[2]++;
                    realBoard[1] = 0;
                    realBoard[0] = 0;
                }
            }
        }
    }
    arr.push(realBoard[0], realBoard[1], realBoard[2]);
    for (let i = 0; i < 3; i++) {
        realBoard[i] = +arr[i];
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
    for (let i = 5; i < 12; i++) {
        realBoard[i] = +arr[index];
        index++;
    }

    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    index = 0;
    for (let i = 3; i < 5; i++) {
        realBoard[i] = arr[index];
        index++;
    }
    renderNumber();
});

minus.addEventListener('click', () => {
    let arr = [];
    if (realBoard[0] > 0) {
        realBoard[0] = +realBoard[0] - 1;
    } else {
        if (realBoard[1] > 0) {
            if (realBoard[0] > 0) {
                realBoard[0] = +realBoard[0] - 1;
            } else {
                realBoard[1]--;
            }
            realBoard[0] = 9;
        } else {
            if (realBoard[0] > 0) {
                realBoard[0] = +realBoard[0] - 1;
            } else if (realBoard[1] > 0) {
                realBoard[1] = +realBoard[1] - 1;
            } else {
                if (realBoard[2] > 0) {
                    realBoard[2]--;
                    realBoard[1] = 9;
                    realBoard[0] = 9;
                }
            }
        }
    }
    arr.push(realBoard[0], realBoard[1], realBoard[2]);
    for (let i = 0; i < 3; i++) {
        realBoard[i] = +arr[i];
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
    for (let i = 5; i < 12; i++) {
        realBoard[i] = +arr[index];
        index++;
    }

    arr = result.toString(16).split('').reverse();
    if (arr.length < 2) {
        for (let i = arr.length; arr.length < 2; i++) {
            arr.push(0);
        }
    }
    index = 0;
    for (let i = 3; i < 5; i++) {
        realBoard[i] = arr[index];
        index++;
    }
    renderNumber();
});
