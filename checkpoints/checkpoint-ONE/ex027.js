'use strict';
//На складе товары находятся в 10-ярусном стеллаже, разбитом на 8 секций. В каждой секции на каждом ярусе предусмот­рено 15 мест для товаров. Нумерация мест показана на рис ex027.png
// Склад обслуживается роботом. Определить, в какой секции и на каком ярусе робот должен взять товар, находящийся на месте с заданным номером.

let product = 16;

function searchProduct(product) {
    let number = 0;
    for (let tier = 1; tier <= 10; tier++) {
        for (let section = 1; section <= 8; section++) {
            for (let place = 0; place < 15; place++) {
                number = number + 1;
                if (number === product) {
                    return { section: section, tier: tier };
                }
            }
        }
    }
}
