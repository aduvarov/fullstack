'use strict';

// Имеется фрагмент программы в виде оператора цикла
// с параметром, обеспечивающий вывод на экран «столбиком» всех
// целых чисел от 10 до 30. Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием

let num = 11;

while (num >= 11 && num <= 30) {
    for (let index = 11; index <= 30; index++) {
        console.log(index);
    }
}
