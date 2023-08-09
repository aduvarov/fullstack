'use strict';

let users = [];

let index = 0;
let body = document.body;

let form = document.createElement('form');

body.prepend(form);

let text = document.createTextNode('\n            ');
let registr = document.createTextNode('Регистрация');
let fieldset = document.createElement('fieldset');
let name1 = document.createTextNode('Имя:');
let name2 = document.createTextNode('Фамилия:');
let name3 = document.createTextNode('Отчество:');

form.append(text);
form.append(fieldset);
form.append(text);

let legend = document.createElement('legend');
fieldset.append(legend);
legend.append(registr);
let label = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');
let input = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let br = document.createElement('br');
let br2 = document.createElement('br');
let br3 = document.createElement('br');
fieldset.append(label);
label.append(name1);
label.append(input);
fieldset.append(br);
fieldset.append(label2);
label2.append(name2);
label2.append(input2);
fieldset.append(br2);
fieldset.append(label3);
label3.append(name3);
label3.append(input3);
fieldset.append(br3);
let button = document.createElement('button');
let done = document.createTextNode('Записаться');
fieldset.append(button);
button.append(done);
let table = document.createElement('table');
table.setAttribute('border', 1);
body.append(table);
let tbody = document.createElement('tbody');
table.append(tbody);
let button1 = document.createElement('button');
let send = document.createTextNode('Отправить');
button1.append(send);
fieldset.append(button1);

button.addEventListener('click', event => {
    event.preventDefault();

    if (input.value === '' || input2.value === '') {
        alert('Заполните Имя и Фамилию');
    } else {
        index++;
        let name4 = document.createTextNode(`${index}`);
        let tr1 = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        tbody.append(tr1);
        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        tr1.append(td4);
        td1.append(name4);
        td2.append(input.value);
        td3.append(input2.value);
        td4.append(input3.value);
        input.value = '';
        input2.value = '';
        input3.value = '';
    }
});

button1.addEventListener('click', event => {
    users = [];
    event.preventDefault();
    let arrTr = Array.from(tbody.children);
    arrTr.forEach(tr => {
        tr.children;
        let user = {};
        user.index = tr.children[0].innerText;
        user.name = tr.children[1].innerText;
        user.lastname = tr.children[2].innerText;
        user.surname = tr.children[3].innerText;
        users.push(user);
    });
    console.log(JSON.stringify(users));
});
