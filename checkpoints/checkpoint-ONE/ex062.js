'use strict';

//Камеры хранения подразделяются на 3 типа, в соответствии с размерами в мм:
//У пассажира есть два чемодана размерами ab и cd
// Подобрать для пассажира камеру минимально необходимого размера.
// Результат в виде строки например 'smallCamera' или 'impossible' при невозможности разместить оба чемодана даже в самой большой камере.

let smallCamera = {
    width: 433,
    height: 340,
    depth: 810,
};
let mediumCamera = {
    width: 588,
    height: 340,
    depth: 810,
};
let bigCamera = {
    width: 897,
    height: 512,
    depth: 810,
};

let smallCaseW = 100;
let smallCaseH = 50;
let bigCaseW = 100;
let bigCaseH = 50;

if (smallCamera.width - (bigCaseW + smallCaseW) >= 0 && smallCamera.height - (bigCaseH + smallCaseH) >= 0) {
    console.log('smallCamera');
} else if (mediumCamera.width - (bigCaseW + smallCaseW) >= 0 && mediumCamera.height - (bigCaseH + smallCaseH) >= 0) {
    console.log('mediumCamera');
} else if (bigCamera.width - (bigCaseW + smallCaseW) >= 0 && bigCamera.height - (bigCaseH + smallCaseH) >= 0) {
    console.log('bigCamera');
} else {
    console.log('impossible');
}
