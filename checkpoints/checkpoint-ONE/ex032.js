'use strcit';

//Написать программу, в которую вводится трехзначное число и выводятся на экран его цифры (через запятую). Например, при вводе числа 123 программа должна вывести:
// '1, 2, 3'

let num = 242;

function number(num) {
    let array = num.toString().split('');
    return `${array[0]} , ${array[1]} , ${array[2]}`;
}
