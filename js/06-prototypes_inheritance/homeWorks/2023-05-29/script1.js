'use strict';

// let user1 = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     show: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     },
// };
// let user2 = {
//     firstName: 'Olga',
//     lastName: 'Petrova',
//     show: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     },
// };

function Name(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.show = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}
let user1 = new Name('Ivan', 'Ivanov');
let user2 = new Name('Olga', 'Petrova');

user1.show();
user2.show();
