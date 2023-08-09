'use strict';

let button1 = document.querySelector('.product__add1');
let button2 = document.querySelector('.product__add2');
let button3 = document.querySelector('.product__add3');
let button4 = document.querySelector('.product__add4');
let button5 = document.querySelector('.product__add5');

let body = document.body;
let users = [];
let table = document.createElement('table');
table.setAttribute('border', 0);
body.append(table);
let tbody = document.createElement('tbody');
table.append(tbody);
let button = document.createElement('button');
let buy = document.createTextNode('Купить');
table.append(button);
button.append(buy);
let buttonClear = document.createElement('button');
let clear = document.createTextNode('Очистить');
table.append(buttonClear);
buttonClear.append(clear);

button1.addEventListener('click', event => {
    event.preventDefault();
    let name = document.createTextNode(`Яблоки`);
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    tbody.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    td1.append(name);
    td2.append('2р');
});
button2.addEventListener('click', event => {
    event.preventDefault();
    let name = document.createTextNode(`Бананы`);
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    tbody.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    td1.append(name);
    td2.append('3р');
});
button3.addEventListener('click', event => {
    event.preventDefault();
    let name = document.createTextNode(`Груши`);
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    tbody.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    td1.append(name);
    td2.append('2р');
});
button4.addEventListener('click', event => {
    event.preventDefault();
    let name = document.createTextNode(`Арбуз`);
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    tbody.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    td1.append(name);
    td2.append('7р');
});
button5.addEventListener('click', event => {
    event.preventDefault();
    let name = document.createTextNode(`Виноград`);
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    tbody.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    td1.append(name);
    td2.append('6р');
});

button.addEventListener('click', event => {
    event.preventDefault();
    users = [];
    let price = 0;

    let arrTr = Array.from(tbody.children);
    arrTr.forEach(tr => {
        tr.children;
        let user = {};
        user.name = tr.children[0].innerText;
        user.price = tr.children[1].innerText;
        users.push(user);
        price += +tr.children[1].innerText[0];
    });
    console.log(price + 'р');
    console.log(JSON.stringify(users));
});

buttonClear.addEventListener('click', e => {
    e.preventDefault();
    tbody.innerHTML = '';
});
