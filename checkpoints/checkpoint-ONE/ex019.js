'use strcit';

//Написать программу, которая решает следующую задачу:
// «N школьников делят k яблок поровну так, чтобы каждому достались только целые яблоки, остальные яблоки остаются в корзинке. Определить, сколько яблок достанется каждому школьнику
// и сколько яблок останется в корзинке». Результат вернуть в виде объекта.

let children = 5;
let apples = 10;

let divApples = Math.trunc(apples / children);
let applesBasket = apples % children;
let result = {
    divApples: divApples,
    applesBasket: applesBasket,
};
