'use strict';

let safe = {
    cas5: 100,
    cas10: 100,
    cas50: 0,
    cas100: 100,
    fakeNote: 100,
    pullOut(cassete) {
        if (this[cassete] === 0) {
            console.log('Error: такой купюры нет');
            return false;
        }
        this[cassete] = this[cassete] - 1;
        return true;
    },
    cashIn(cassete) {
        if (cassete === 'fakeNote') {
            console.log('Warning: Принята фальшивка');
        }
        if (this[cassete] < 2500) {
            this[cassete] = this[cassete] + 1;
            return true;
        } else {
            console.log('Error: недостаточно места в кассете');
            return false;
        }
    },
    getSumm() {
        let summa = this.cas5 * 5 + this.cas10 * 10 + this.cas50 * 50 + this.cas100 * 100;
        return {
            cas5: this.cas5,
            cas10: this.cas10,
            cas50: this.cas50,
            cas100: this.cas100,
            fakeNote: this.fakeNote,
            summa,
        };
    },
    cashMax(cassete, amout) {
        this[cassete] = amout;
    },
    cashMinFakeNote() {
        let fakeNote = this.fakeNote;
        this.fakeNote = 0;
        return fakeNote;
    },
};

// Загружаем тестовую десятку
if (safe.cashIn('cas10')) {
    console.log('ok');
} else {
    console.log('no');
}
