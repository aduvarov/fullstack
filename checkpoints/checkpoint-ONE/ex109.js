'use strict';

//Подготовить фрагмент программы, в которой пользова-
// тель должен ввести установленный пароль в виде целого числа.
// В случае ввода неправильного пароля на экран должно выводить-
// ся сообщение об ошибке, после чего действия должны повторять-
// ся до ввода правильного значения. После этого на экран должно
// выводиться некоторое приветствие.

let password = 3;
let userAnswer = +prompt('Введите пароль в виде целого числа');

while (userAnswer !== password) {
    userAnswer = +prompt('Error: введён неверный пароль');
}
alert('Введен верный пароль');
