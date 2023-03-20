'use strict';
//Сейф дожен иметь метод для получения кол-ва банкнот в каждой из 5ти кассет, а также общей суммы денег. (воврат одним объектом). На фальшивки не обращаем внимания для расчёта суммы.

// Максимальный объём любой кассеты - 2500 штук. Больше банкнот в одну кассету нельзя загрузить, и при попытке загрузить в полную кассету ещё одной банкноты, банкомат должен выдавать соответствующую ошибку.

let safe = {
    cas5: 0,
    cas10: 0,
    cas50: 0,
    cas100: 0,
    fake: 0,
    cashIn(cassete) {
        if (this[cassete] < 2500) {
            this[cassete] = this[cassete] + 1;
            return true;
        } else {
            console.log('Больше 2500 банкнот нельзя загрузить');
            return false;
        }
    },
    getSumm() {
        let summa = this.cas5 * 5 + this.cas10 * 10 + this.cas50 * 50 + this.cas100 * 100;
        return { cas5: this.cas5, cas10: this.cas10, cas50: this.cas50, cas100: this.cas100, fake: this.fake, summa };
    },
};
