import { User, recycle } from './modules/User.js';

let user1 = new User('Masha', 1);
console.log('user1: ', user1);
let user2 = new User('Vasya', 2);
console.log('user2: ', user2);

recycle();
recycle();
