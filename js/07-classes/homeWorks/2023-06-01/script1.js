'use strict';

class Book {
    constructor(name, author, iSBN, numPages, year) {
        this._name = name;
        this._autor = author;
        this._iSBN = iSBN;
        this._numPages = numPages;
        this._year = year;
        this._readPages = 0;
        this._remPages = numPages;
    }
    get name() {
        console.log(this._name);
        return this._name;
    }
    get author() {
        console.log(this._autor);
        return this._autor;
    }
    set author(value) {
        console.log(`Error: не возможно заменить автора у книги`);
    }
    get iSBN() {
        console.log(this._iSBN);
        return this._iSBN;
    }
    set iSBN(value) {
        console.log(`Error: не возможно изменить уникальный номер книжного издания`);
    }
    get numPages() {
        console.log(this._numPages);
        return this._numPages;
    }
    set numPages(value) {
        console.log(`Вырывали из этой книги ${value} страниц.`);
        this._numPages = value;
    }
    get year() {
        console.log(this._year);
        return this._year;
    }
    get readPages() {
        console.log(`В этой книге прочтано уже ${this._readPages} страниц`);
        return this._readPages;
    }
    set readPages(value) {
        if (value > this._remPages) {
            console.error(`Error:Невозможно прочитать ${value} страниц в этой книге`);
        } else if (value < 0) {
            console.error('Error:не может быть страниц меньше 0');
        } else if (!(typeof value === 'number')) {
            console.error('Error:Введите число');
        } else {
            this._readPages += value;
            this._remPages = this._remPages - value;
        }
    }
}

let book1 = new Book(
    'JavaScript для профессиональных веб-разработчиков',
    'Мэтт Фрисби',
    '978-5-4461-1740-6',
    1168,
    2022
);
let book2 = new Book(
    'Отзывчивый дизайн на HTML5 и CSS3 для любых устройств',
    'Бен Фрейн',
    '978-5-4461-1495-5',
    336,
    2022
);

// book1.readPages; // В этой книге прочтано уже 0 страниц
// book2.readPages; // В этой книге прочтано уже 0 страниц
// book1.readPages = 50;
// book1.readPages; // В этой книге прочтано уже 50 страниц
// book2.readPages; // В этой книге прочтано уже 0 страниц
// book2.readPages = 150;
// book1.readPages; // В этой книге прочтано уже 50 страниц
// book2.readPages; // В этой книге прочтано уже 150 страниц
// book1.readPages = 300;
// book1.numPages; // 1100;
// book1.readPages; // В этой книге прочтано уже 350 страниц
// book2.readPages = 250; //Невозможно прочитать 250 страниц в этой книге
// book2.readPages; // В этой книге прочтано уже 150 страниц
// book1.author = 'Михаил Прокопчик'; // Error: не возможно заменить автора у книги
// book1.author; // Мэтт Фрисби
// book2.iSBN = '45823452347598'; // Error: не возможно изменить уникальный номер книжного издания
// book2.iSBN; // 978-5-4461-1495-5
// book1.numPages = 1100; // Вырывали из этой книги 68 страниц.
// book1.numPages; // 1100;
