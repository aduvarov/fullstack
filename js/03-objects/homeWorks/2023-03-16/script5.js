'use strict';

let safe = {
    cas5: 100,
    cas10: 100,
    cas50: 100,
    cas100: 100,
    fakeNote: 'fake',
    pullOut(cassete) {
        if (cassete) {
            if (this[cassete] === 0) {
                return console.log('Error: такой купюры нет');
            }
            this[cassete] = this[cassete] - 1;
            return true;
        } else {
            return false;
        }
    },
    cashIn(cassete) {
        this[cassete] = this[cassete] + 1;
        return true;
    },
    getSumm() {
        let summa = this.cas5 * 5 + this.cas10 * 10 + this.cas50 * 50 + this.cas100 * 100;
        return { cas5: this.cas5, cas10: this.cas10, cas50: this.cas50, cas100: this.cas100, fake: this.fake, summa };
    },
    cashMax(cassete, amout) {
        this[cassete] = amout;
    },
    cashMinFakeNote() {
        let fakeNote = this.fake;
        this.fake = 0;
        return fakeNote;
    },
};
