'use strict';

// Имеется фрагмент программы в виде оператора цикла
// с параметром, обеспечивающий вывод на экран «столбиком» всех
// целых чисел от 10 до 30. Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием

let num = 10;

do {
    console.log(num);
    num = num + 1;
} while (num >= 10 && num <= 30);

num = 10;
while (num >= 10 && num <= 30) {
    console.log(num);
    num += 1;
}