'use strict';

let filmTop1 = {
    name: 'Зеленая миля',
    rang: 1,
    budget: 60_000_000,
    boxOffice: 286_801_374,
    time: {
        hours: 3,
        minutes: 9,
    },
    profit() {
        let profit = this.boxOffice - this.budget;
        return profit;
    },
};

function Film(nameRu, rangFilm, budgetFilm, boxOfficeFilm, timeFilm) {
    this.name = nameRu;
    this.rang = rangFilm;
    this.budget = budgetFilm;
    this.boxOffice = boxOfficeFilm;
    this.time = timeFilm;
    this.profit = function () {
        let profit = this.boxOffice - this.budget;
        return profit;
    };
    return this;
}

let filmTop2 = new Film('Список Шиндлера', 2, 22_000_000, 321_306_305, { hours: 3, minutes: 15 });
let filmTop3 = new Film('Побег из Шоушенка', 3, 25_000_000, 28_418_687, { hours: 2, minutes: 22 });

///

function Box(boxW, boxH, boxD) {
    this.width = boxW;
    this.height = boxH;
    this.deep = boxD;
    this.volume = function () {
        let volume = this.width * this.height * this.deep;
        return volume;
    };
}

let box1 = new Box(100, 150, 100);
let box2 = new Box(120, 170, 160);
let box3 = new Box(150, 140, 180);
console.log(`box1 width = ${box1.width}`);
