'use strict';

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    show: function () {
        console.log(this.step);
        return this;
    },
};
