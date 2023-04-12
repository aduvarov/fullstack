x = null;
let array = [1, 10, 5, 4, 7];
x = array.map(elem => {
    return (elem += elem);
});
console.log(typeof x); //
console.log(x); //
///////////////////////////////////////////////////////

x = null;
array = [1, 10, 5, 4, 7];
x = array.forEach(elem => {
    return (elem += elem);
});
console.log(typeof x); //
console.log(x); //
///////////////////////////////////////////////////////

x = null;
array = [1, 10, 5, 4, 7];
x = array.forEach(elem => {
    return 5;
});
console.log(typeof x); //
console.log(x); //
/////////////////////////////////////////////////////////

let users = [
    {
        userLogin: 'i.petrov',
        userPassword: 'jdu44jd',
        userLevel: 8,
    },
    {
        userLogin: 'a.ivanov',
        userPassword: '978dufvj4',
        userLevel: 2,
    },
    {
        userLogin: 'b.sidorov',
        userPassword: 'pikdf0i344',
        userLevel: 5,
    },
];

console.log(
    users.find(user => {
        return user.userLevel >= 4;
    })
);

for (let user of users) {
    if (user.userLevel <= 5) {
        console.log(user);
    }
}

console.log('password' in users[1]);
console.log('userPassword' in users[2]);

let guest = {
    guestName: 'Ivan',
    guestLastName: 'Ivanov',
};

console.log(guest[guestName]); //

////////////////////////////////////////////////////////////////////////////////////////

let cars = ['audi', 'bmw', 'nissan', 'toyota'];
let moto = cars;
cars[5] = 'mercedes';
moto[0] = 'kavasaki';
moto[2] = 'suzuki';
moto[3] = 'yamaha';
console.log(cars); //
console.log(moto); //

/////////////////////////////////////////////////////////////////////////////////////////////

let bmw = {
    industry: 'Automotive',
    brands: ['Alpina', 'BMW', 'DriveNow', 'Mini', 'Rolls-Royce'],
};

let mercedes = bmw;
mercedes.brands = ['Mercedes-Benz', 'Mercedes-EQ', 'Mercedes-Maybach'];

console.log(bmw); //
console.log(mercedes); //
///////////////////////////////////////////////////////////////////////////////////////////////

// Имеется массив
let arr = [5, 'number', undefined, [1, 2], ['asdf', 'qwerty'], true, false, [true, false]];
let arrays; // надо написать код, чтобы узнать сколько массивов содержиться в arr
console.log(arrays);
/////////////////////////////////////////////////////////////////////////////////

// имеется строка. Необходимо сделать так, чтобы в этой строке каждый 2й символ был заглавный (qWeRtY...)
let targetStr = 'qwertyuiop';

/////////////////////////////////////////////////////
