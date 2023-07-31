'use strict';

let tr = document.body.children[0].children[0].children[0];
let td = document.createElement('td');
tr.append(td);
console.log(tr.children[0]);
td = tr.children[tr.children.length - 1];
let text = document.createTextNode('2');
td.append(text);
let table = document.body.children[0].lastElementChild;
table.insertAdjacentHTML('beforeend', '<tr><td>3</td><td>4</td></tr>');
tr.children[0].firstChild.remove();

let table2 = document.body.children[2].lastElementChild;
let tr2 = document.body.children[0].lastElementChild.lastElementChild;
table2.append(tr2);
table2 = document.body.children[2];
let table3 = table2.cloneNode(true);
let body = document.body;
body.insertAdjacentHTML('afterbegin', '<p>three</p>');
body.append(table3);
