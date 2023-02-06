let number1;
let number2;
let number3;

alert('Нельзя вводить одинаковые числа');
number1 = +prompt('Введите первое число');
number2 = +prompt('Введите второе число');
number3 = +prompt('Введите третье число');

if (number1 > number2) {
    if (number1 > number3) {
        if (number2 > number3) {
            alert('Число ' + number2 + ' среднее число');
        } else {
            alert('Число ' + number3 + ' среднее число');
        }
    } else {
        alert('Число ' + number1 + ' среднее число');
    }
} else if (number1 < number3) {
    if (number2 > number3) {
        alert('Число ' + number3 + ' среднее число');
    } else {
        alert('Число ' + number2 + ' среднее число');
    }
} else {
    alert('Число ' + number1 + ' среднее число');
}
