'use strict';

//5. Написать функцию которая принимает массив фильмов и число минут  и возвращающая новый массив из названий фильмов на русском языке продолжительнее минут которые ввёл пользователь.

let moviesDB = [
    {
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
        rang: 5.8,
    },
    {
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
        rang: 6.1,
    },
    {
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
        rang: 7.9,
    },
    {
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
        rang: 9.7,
    },
    {
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
    },
    {
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
    },
    {
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
        rang: 7.6,
    },
    {
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
        rang: 6.6,
    },
    {
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
        rang: 9.7,
    },
    {
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
        time: { hours: 2, minuts: 21 },
        rang: 8.8,
    },
];

console.log(filterMinutesFilm(moviesDB, 180));
// time: { hours: 3, minuts: 15 },
function filterMinutesFilm(moviesDB, time) {
    // let films = [];
    // let minuts = 0;
    // for (let index = 0; index < moviesDB.length; index++) {
    //    minuts = moviesDB[index].time.hours * 60 + moviesDB[index].time.minuts;
    //     // console.log(minuts);
    //     if (minuts >= time) {
    //         films.push(moviesDB[index].nameFilmRu);
    //     }
    // }
    // return films;

    return moviesDB.filter(film => {
        let minuts = film.time.hours * 60 + film.time.minuts;
        return minuts >= time ? true : false;
    });
}
