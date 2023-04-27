'use strcit';

//произведение всех целых чисел от a до b (значения a и b
// вводятся с клавиатуры; b ≥ a)

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

let mult = 1;
if (b >= a) {
    for (let count = a; count <= b; count++) {
        mult = mult * count;
    }
}
console.log(mult);
