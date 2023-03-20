'use strict';

// Сейф должен иметь 4 кассеты для хранения купюр номиналом 100, 50, 10 и 5 рублей. И одну кассету для фальшивок.

// Сейф должен иметь метод для выгрузки одной купюры вышеуказанного номинала если она имеются в кассете . Если купюры такого номинала нет, то выдавать ошибку. (успешная выгрузка осуществляется оператором return true, неуспешная return false)

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
};
