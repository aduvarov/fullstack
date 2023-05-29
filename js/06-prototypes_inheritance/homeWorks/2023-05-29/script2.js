'use strict';

// function createUser(login, email) {
//     return {
//         login: login,
//         email: email,
//         showContactInfo: function () {
//             console.log('Мой логин ' + this.login + ', мой email ' + this.email);
//         },
//     };
// }

function User(login, email) {
    this.login = login;
    this.email = email;
    this.showContactInfo = function () {
        console.log('Мой логин ' + this.login + ', мой email ' + this.email);
    };
}

let user1 = new User('admin', 'admin@example.com');
let user2 = new User('user', 'user@example.com');

user1.showContactInfo();
user2.showContactInfo();
