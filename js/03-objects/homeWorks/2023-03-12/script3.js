'use strict';
// 3. Создать массив из любых 10 фильмов. На основе информации кинопоиска.
// Каждый фильм должен представлять собой объект со следующими свойствами:
// Название на английском: string,
// Название на русском: string,
// Год: number,
// Актёры: array,
// Продолжительность: object,
// Рейтинг: number

let SchindlerList = {
    nameFilmRu: 'Список Шиндлера',
    nameFilmEn: 'Schindlers List',
    year: 1993,
    roles: [
        'Лиам Нисон',
        'Бен Кингсли',
        'Рэйф Файнс',
        'Кэролайн Гудолл',
        'Эмбет Дэвидц',
        'Йонатан Сэгаль',
        'Малгоша Гебель',
        'Шмуэль Леви',
        'Марк Иванир',
        'Беатриче Макола',
    ],
    time: { hours: 3, minuts: 15 },
    rang: 8.8,
};
console.log(SchindlerList);
let EscapeFromShawshank = {
    nameFilmRu: 'Побег из Шоушенка ',
    nameFilmEn: 'EscapeFromShawshank',
    year: 1994,
    roles: [
        'Тим Роббинс',
        'Морган Фриман',
        'Боб Гантон',
        'Уильям Сэдлер',
        'Клэнси Браун',
        'Гил Беллоуз',
        'Марк Ролстон',
        'Джеймс Уитмор',
        'Джеффри ДеМанн',
        'Ларри Бранденбург',
    ],
    time: { hours: 2, minuts: 22 },
    rang: 9.1,
};
console.log(EscapeFromShawshank);
let ForrestGump = {
    nameFilmRu: 'Форрест Гамп',
    nameFilmEn: 'Forrest Gump',
    year: 1994,
    roles: [
        'Том Хэнкс',
        'Робин Райт',
        'Салли Филд',
        'Гэри Синиз',
        'Майкелти Уильямсон',
        'Майкл Коннер Хэмпфри',
        'Ханна Р. Холл',
        'Сэм Андерсон',
        'Шиван Фэллон',
        'Ребекка Уильямс',
    ],
    time: { hours: 2, minuts: 22 },
    rang: 8.9,
};
console.log(ForrestGump);
let TheMysteryOfCoco = {
    nameFilmRu: 'Тайна Коко',
    nameFilmEn: 'TheMysteryOfCoco',
    year: 2017,
    roles: [
        'Энтони Гонсалес',
        'Гаэль Гарсиа Берналь',
        'Бенджамин Брэтт',
        'Аланна Юбак',
        'Рене Виктор',
        'Хайме Камиль',
        'Альфонсо Арау',
        'Херберт Сигенса',
        'Габриэль Иглесиас',
        'Ломбардо Бойяр',
    ],
    time: { hours: 1, minuts: 45 },
    rang: 8.7,
};
console.log(TheMysteryOfCoco);
let LordOfTheRings = {
    nameFilmRu: 'Властелин колец: Возвращение короля',
    nameFilmEn: 'Lord of the Rings: The Return of the King',
    year: 2003,
    roles: [
        'Элайджа Вуд',
        'Вигго Мортенсен',
        'Шон Эстин',
        'Иэн Маккеллен',
        'Орландо Блум',
        'Доминик Монахэн',
        'Билли Бойд',
        'Энди Серкис',
        'Миранда Отто',
        'Бернард Хилл',
    ],
    time: { hours: 3, minuts: 21 },
    rang: 8.7,
};
console.log(LordOfTheRings);
let Interstellar = {
    nameFilmRu: 'Интерстеллар',
    nameFilmEn: 'Interstellar',
    year: 2014,
    roles: [
        'Мэттью МакКонахи',
        'Энн Хэтэуэй',
        'Джессика Честейн',
        'Маккензи Фой',
        'Майкл Кейн',
        'Дэвид Джеси',
        'Уэс Бентли',
        'Кейси Аффлек',
        'Джон Литгоу',
        'Мэтт Дэймон',
    ],
    time: { hours: 2, minuts: 49 },
    rang: 8.6,
};
console.log(Interstellar);
let PulpFiction = {
    nameFilmRu: 'Криминальное чтиво',
    nameFilmEn: 'Pulp Fiction',
    year: 1994,
    roles: [
        'Джон Траволта',
        'Сэмюэл Л. Джексон',
        'Брюс Уиллис',
        'Ума Турман',
        'Винг Реймз',
        'Тим Рот',
        'Харви Кейтель',
        'Квентин Тарантино',
        'Питер Грин',
        'Аманда Пламмер',
    ],
    time: { hours: 2, minuts: 34 },
    rang: 8.6,
};
console.log(PulpFiction);
let BackToTheFuture = {
    nameFilmRu: 'Назад в будущее',
    nameFilmEn: 'Back to the Future',
    year: 1985,
    roles: [
        'Майкл Дж. Фокс',
        'Кристофер Ллойд',
        'Лиа Томпсон',
        'Криспин Гловер',
        'Томас Ф. Уилсон',
        'Клаудия Уэллс',
        'Марк МакКлюр',
        'Уэнди Джо Спербер',
        'Джордж ДиЧенцо',
        'Фрэнсис Ли МакКейн',
    ],
    time: { hours: 1, minuts: 56 },
    rang: 8.6,
};
console.log(BackToTheFuture);
let FightClub = {
    nameFilmRu: 'Бойцовский клуб',
    nameFilmEn: 'Fight Club',
    year: 1999,
    roles: [
        'Эдвард Нортон',
        'Брэд Питт',
        'Хелена Бонем Картер',
        'Мит Лоаф',
        'Зэк Гренье',
        'Холт Маккэллани',
        'Джаред Лето',
        'Эйон Бэйли',
        'Ричмонд Аркетт',
        'Дэвид Эндрюс',
    ],
    time: { hours: 2, minuts: 19 },
    rang: 8.7,
};
console.log(FightClub);
let TheLionKing = {
    nameFilmRu: 'Король Лев',
    nameFilmEn: 'The Lion King',
    year: 1994,

    roles: [
        'Мэттью Бродерик',
        'Джереми Айронс',
        'Нэйтан Лейн',
        'Эрни Сабелла',
        'Джеймс Эрл Джонс',
        'Мойра Келли',
        'Роуэн Эткинсон',
        'Вупи Голдберг',
        'Чич Марин',
        'Никета Калам',
    ],
    time: { hours: 1, minuts: 28 },
    rang: 8.8,
};
console.log(TheLionKing);
