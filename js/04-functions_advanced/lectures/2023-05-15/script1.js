'use strict';

let activeUser = {
    login: 'i.ivanov',
    userGroup: 'managers',
};

let exchange = {
    _byn2usd: 2.2,
    _kzt2usd: 2.2,
    get byn2usd() {
        return this._byn2usd;
    },
    get kzt2usd() {
        return this._kzt2usd;
    },
    set byn2usd(newKurs) {
        if (typeof newKurs == 'number') {
            this._byn2usd = newKurs;
        } else {
            return console.error('Error: неверный курс');
        }
    },
    set kzt2usd(newKurs) {
        if (typeof newKurs == 'number') {
            this._kzt2usd = newKurs;
        } else {
            return console.error('Error: неверный курс');
        }
    },
};

let product = {
    name: 'Redmi',
    type: 'smartphone',
    model: 'Note 12 Pro',
    priceUSD: 333,
    _discount: 10,
    get priceKZT() {
        return this.priceUSD * exchange.kzt2usd - (this.priceUSD * exchange.kzt2usd * this.discount) / 100;
    },
    get priceBYN() {
        return this.priceUSD * exchange.byn2usd - (this.priceUSD * exchange.byn2usd * this.discount) / 100;
    },
    get discount() {
        return this._discount;
    },
    set discount(newSkidka) {
        if (activeUser.userGroup === 'managers') {
            if (typeof newSkidka == 'number') {
                this._discount = newSkidka;
            } else {
                return console.error('Error: неверный процент');
            }
        } else {
            return console.error('Error: нехватает прав доступа для изменения размера скидки');
        }
    },
};

let product2 = {
    name: 'Redmi',
    type: 'smartphone',
    model: 'Note 12 Pro Plus',
    _priceUSD: 444,
};

let assortiment = ['молоко', 'хлеб', 'масло', 'яйца', 'творог'];

let basket = {
    _products: [],
    get products() {
        if (this._products.length > 0) {
            return this._products.pop();
        } else {
            return console.log('корзина пуста');
        }
    },
    set products(product) {
        if (assortiment.includes(product)) {
            this._products.push(product);
        } else {
            return console.log('Этого продукта нет в ассортименте');
        }
    },
    clear() {
        this._products = [];
    },
};

basket.products = 'молоко'; //set
basket.products = 'творог'; //set

let kassa = [];
let prod = basket.products; //get
kassa.push(prod);
