'use strcit';

//произведение всех целых чисел от a до b (значения a и b
// вводятся с клавиатуры; b ≥ a)

let a = 2;
let b = 5;

let mult = 1;

for (let count = a; count <= b; count++) {
    mult = mult * count;
}
console.log(mult);
