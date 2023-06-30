'use strict';

// 1. Достать карточку из бумажника - enterCard
// 2. Вставить карточку в банкомат - enterPin
// 3. Ввести верный пинкод - enterSumm
// 4. Ввести сумму которую необходимо снять - takeMoney
// 5. Вытащить деньги - takeCard
// 6. Вытащить карточку - goodLuck

takeCardFromWallet(card => {
    insertCardToBankomat(card, msg => {
        enterCardPin(msg, msg => {
            enterAmountOfMoney(msg, money => {
                takeMoneyFromBankomat(money, card => {
                    takeCardFromBankomat(card, console.log);
                });
            });
        });
    });
});

function takeCardFromWallet(callback) {
    console.log(`Достал карту из бумажника`);
    let result = `masterCard`;
    callback(result);
} //card

function insertCardToBankomat(card, callback) {
    console.log(`втавил ${card} в банкомат`);
    let result = `Введите пин-код`;
    callback(result);
} //msgEnterPin

function enterCardPin(msg, callback) {
    console.log(`На сообщение ${msg} ввожу верный пинкод`);
    let result = `Введите необходимую сумму`;
    callback(result);
} //msgEnterAmountOfMoney

function enterAmountOfMoney(msg, callback) {
    console.log(`На сообщение ${msg} ввожу необходимую сумму`);
    let result = 500;
    callback(result);
} //money

function takeMoneyFromBankomat(money, callback) {
    console.log(`забираю ${money}р с банкомата`);
    let result = `card`;
    callback(result);
} //msgDontLeaveACard

function takeCardFromBankomat(card, callback) {
    console.log(`Достал ${card} из банкомата`);
    let result = `masterCard`;
    callback(result);
} //card
