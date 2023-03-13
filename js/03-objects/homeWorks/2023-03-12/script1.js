// 1. Имеется массив сотрудников с зарплатами.

staff = [
    { lastName: 'Иванов', salary: 1300 },
    { lastName: 'Смирнова', salary: 800 },
    { lastName: 'Кузнецов', salary: 1000 },
    { lastName: 'Попова', salary: 200 },
    { lastName: 'Васильев', salary: 500 },
    { lastName: 'Петров', salary: 550 },
    { lastName: 'Соколов', salary: 600 },
    { lastName: 'Михайлова', salary: 320 },
    { lastName: 'Новиков', salary: 440 },
    { lastName: 'Александров', salary: 950 },
    { lastName: 'Дмитриев', salary: 400 },
    { lastName: 'Королев', salary: 330 },
    { lastName: 'Гусева', salary: 660 },
    { lastName: 'Киселева', salary: 700 },
    { lastName: 'Ильин', salary: 1100 },
    { lastName: 'Максимова', salary: 2000 },
    { lastName: 'Поляков', salary: 950 },
    { lastName: 'Сорокин', salary: 1000 },
    { lastName: 'Виноградов', salary: 280 },
    { lastName: 'Ковалев', salary: 200 },
    { lastName: 'Белов', salary: 670 },
    { lastName: 'Медведев', salary: 500 },
    { lastName: 'Антонова', salary: 300 },
    { lastName: 'Тарасов', salary: 1400 },
];
let result = totalSalary(staff);
console.log(result);
function totalSalary(staff) {
    let totalSalary = 0;
    for (let index = 0; index < staff.length; index++) {
        totalSalary = totalSalary + staff[index].salary;
    }
    return totalSalary;
}

let result2 = averageSalary(staff);
console.log(result2);
function averageSalary(staff) {
    let averageSalary = 0;
    for (let index = 0; index < staff.length; index++) {
        averageSalary = averageSalary + staff[index].salary;
    }
    averageSalary = Math.trunc(averageSalary / staff.length);
    return averageSalary;
}

let result3 = minSalary(staff);
console.log(result3);
function minSalary(staff) {
    let lastName;
    let manLowSalary = [];
    for (let index = 0; index < staff.length; index++) {
        if (staff[index].salary <= 200) {
            lastName = staff[index].lastName;
            manLowSalary.push(minSalary);
        }
    }
    return manLowSalary;
}

// написать функцию которая принимает массив сотрудников высчитывает общую зп и возвращает её . //17150
// написать функцию которая принимает массив сотрудников высчитывает среднюю зп и возвращает её . // 714
// написать функцию которая принимает массив сотрудников и минимальную зарплату и возвращает новый массив из списка только фамилий тех человек которые получают минимум или меньше.
