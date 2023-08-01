import { realBoard } from "./module/realBoard.js";

let wrapper = document.querySelector('.wrapper');
let activePlayer = document.querySelector('.activePlayer');
let btn = document.querySelector('.btn');

let viewBoard = [];

for (let i = 0; i < 9; i++) {
    viewBoard.push(document.querySelector(`.wrapper__cell${i}`));
}

let currentPlayer = 'X';

// realBoard[4] = 'X';
activePlayer.innerText = 'ход крестиков';
function renderBoard() {
    realBoard.forEach((e, i) => {
        viewBoard[i].innerText = e;
    });
    activePlayer.innerText = currentPlayer === 'X' ? 'ход крестиков' : 'ход ноликов';
}

wrapper.addEventListener('click', click);

function click(event) {
    console.dir(event);
    let i = event.target.classList[1].at(-1);

    if (realBoard[i] !== '') {
        activePlayer.innerText =
            currentPlayer === 'X' ? 'ход крестиков (ячейка занята)' : 'ход ноликов (ячейка занята)';
    } else {
        realBoard[i] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard();
    }
    let winner = checkWin();
    console.log('winner: ', winner);
    if (winner === 'XO') {
        activePlayer.innerText = 'Ничья!';
        wrapper.removeEventListener('click', click, false);
    } else if (winner !== null) {
        console.log(winner);
        wrapper.removeEventListener('click', click, false);
        activePlayer.innerText = currentPlayer === 'X' ? 'победа ноликов' : 'победа крестиков';
    }
}

function checkWin() {
    if (realBoard[0] !== '' && realBoard[0] === realBoard[4] && realBoard[4] === realBoard[8]) {
        return realBoard[0];
    }
    if (realBoard[2] !== '' && realBoard[2] === realBoard[4] && realBoard[4] === realBoard[6]) {
        return realBoard[2];
    }
    if (realBoard[0] !== '' && realBoard[0] === realBoard[1] && realBoard[1] === realBoard[2]) {
        return realBoard[0];
    }
    if (realBoard[3] !== '' && realBoard[3] === realBoard[4] && realBoard[4] === realBoard[5]) {
        return realBoard[3];
    }
    if (realBoard[6] !== '' && realBoard[6] === realBoard[7] && realBoard[7] === realBoard[8]) {
        return realBoard[6];
    }
    if (realBoard[0] !== '' && realBoard[0] === realBoard[3] && realBoard[3] === realBoard[6]) {
        return realBoard[0];
    }
    if (realBoard[1] !== '' && realBoard[1] === realBoard[4] && realBoard[4] === realBoard[7]) {
        return realBoard[1];
    }
    if (realBoard[2] !== '' && realBoard[2] === realBoard[5] && realBoard[5] === realBoard[8]) {
        return realBoard[2];
    }
    if (!realBoard.includes('')) {
        return 'XO';
    }
    return null;
}

btn.addEventListener('click', () => {
    location.reload();
});
