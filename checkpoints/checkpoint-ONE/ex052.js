'use strcit';

//ex052:
// Дано трехзначное число. Выяснить, является ли оно палиндромом («перевертышем»), т. е. таким числом, десятичная запись­ которого читается одинаково слева направо и справа налево.

let m = 424;

function numPolidrom(m) {
    let num1 = Number(m.toString()[0]);
    let num2 = Number(m.toString().at(-1));
    if (num1 === num2) {
        return `Число ${m} является полиндромом`;
    } else {
        return `Число ${m} неявляется полиндромом`;
    }
}