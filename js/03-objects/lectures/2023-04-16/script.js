'use strict';

// map.set(key, value) // создать новый элемент коллекции
// map.get(key) // получить значение из коллекции по ключу (если эл. не существует будет undefined)
// map.has(key) // возвращает тру если элемент по ключу есть, иначе фалзе
// map.delete(key) // удаляет элемент по ключу
// map.clear()/ полностью очищает коллекцию
// map.size // возвращает кол-во элементов в коллекции

// let motherPocket = 100;
// let andrewPocket = motherPocket;
// andrewPocket += 50;
// let mishaPocket = motherPocket;
// motherPocket === mishaPocket; // true

// let motherSafe = { money: 5000 }; // железный ключ и ссылка на банк где лежит сейф
// let mother2Safe = { money: 5000 }; // железный ключ и ссылка на банк где лежит сейф но это уже совсем другой сейф и совсем другой ключ
// motherSafe === mother2Safe; // false

// let mishaSafe = motherSafe; // копию железного ключа
// let andrewSafe = mishaSafe;

// andrewSafe.money -= 500;

// let bank = { bankName: 'BelBank' };

// ////////
// let myMap = new Map();

// myMap.set(motherSafe, bank);

// myMap.has(mishaSafe); // true
// myMap.has(andrewSafe); // true
// myMap.has({ money: 5000 }); //false

// let user1 = {
//     userName: 'Misha',
//     age: 17,
// };
// let user2 = {
//     userName: 'Andrew',
//     age: 17,
// };
// let user3 = {
//     userName: 'Rifat',
//     age: 24,
// };
// let basket1 = {
//     content: ['banana', 'apple'],
// };
// let basket2 = {
//     content: ['meat', 'milk'],
// };
// let basket3 = {
//     content: ['bread', 'butter'],
// };

// let shopper = new Map();
// shopper.set(user1, basket1);
// shopper.set(user2, basket2);
// shopper.set(user3, basket3);

// Set

let uniqUsers = new Set();
// uniqUsers.add(value) // добавить в коллекцию значение
// uniqUsers.delete(value) // удалить из коллекции значение
// uniqUsers.has(value) // проверить есть ли в коллекции значение
// uniqUsers.clear() // очистить коллекцию
// uniqUsers.size // получить размер коллекции

let user1 = {
    userName: 'Misha',
    age: 17,
};
let user2 = {
    userName: 'Andrew',
    age: 17,
};
let user3 = {
    userName: 'Rifat',
    age: 24,
};

uniqUsers.add(user1);
uniqUsers.add(user2);
uniqUsers.add(user3);
