//3). Количество цифр в строке
//Написать программу, которая подсчитывает, сколько содержится любых цифр в строке.

let number = 0;
let str = '0124345644447rasdfa4sdfasdfe89';

for (let index = 0; index < str.length; index++) {
    if (isNaN(+str[index]) == false) {
        number++;
    }
}
console.log(number);
