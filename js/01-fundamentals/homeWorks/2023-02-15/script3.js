'use strict';
//2). Написать простейший калькулятор.  Он должен состоять из четырёх функий sum, sub, mult, divide ( и выполняющих соответственно суммирование или вычитание или умножение или деление). Выбор необходимой  надо производить с помощью конструкции switch
//- запросить у пользователя одно число;
//- запросить у пользователя операцию (+ - * или /)
//- запросить у пользователя второе число;
//Посчитать и вывести результат вычислений пользователю

let num1 = +prompt('Введите первое число:');
let math = prompt('Введите операцию + - * или /');
let num2 = +prompt('Введите второе число:');

switch (math) {
    case '+':
        let summa = sum(num1, num2);
        document.write(summa);
        break;

    case '-':
        let subtraction = sub(num1, num2);
        document.write(subtraction);
        break;
    case '*':
        let multiplication = mult(num1, num2);
        document.write(multiplication);
        break;
    case '/':
        let division = div(num1, num2);
        document.write(division);
        break;
}

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function sub(num1, num2) {
    let result = num1 - num2;
    return result;
}

function mult(num1, num2) {
    let result = num1 * num2;
    return result;
}

function div(num1, num2) {
    let result = num1 / num2;
    return result;
}
