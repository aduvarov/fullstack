// Создайте функцию, которая принимает в качестве параметра целое число и возвращает:
// -1 – в случае, если число отрицательное; 0 – в случае, если число равно 0; 1 – в случае, если число положительное.

let userNum = +prompt('Введите любое число', 6);
let result = checkNum(userNum);
document.write(result);
function checkNum(userNum) {
    if (userNum === 0) {
        return 0;
    } else if (userNum > 0) {
        return 1;
    } else if (userNum < 0) {
        return -1;
    }
}
