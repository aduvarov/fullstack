'use strict';
// Имеется объект с фильмами которые хотеось бы посмотреть.
// Фильмы лежат на разных сайтах. Каждый сайт представляет собой массив фильмов
// Необходимо написать рекурсивную функцию подсчитывающую общее необходимо время для просмотра
// всех фильмов на всех сайтах в общем. В формате часы минуты.
// Например 'Для просмотра всех фильмов необходимо 244 ч. 15 м.'

let allMovies = {
    site1: [
        {
            movieLength: 112,
            name: '1+1',
        },
        {
            movieLength: 113,
            name: 'Джентльмены',
        },
    ],
    sites2_3: {
        site2: [
            {
                movieLength: 180,
                name: 'Волк с Уолл-стрит',
            },
        ],
        site3: [
            {
                name: 'Брат',
                movieLength: 100,
            },
            {
                movieLength: 103,
                name: 'Один дома',
            },
            {
                movieLength: 148,
                name: 'Начало',
            },
        ],
    },
    sites4_12: {
        sites4_6: {
            site4: [
                {
                    movieLength: 139,
                    name: 'Бойцовский клуб',
                },
            ],
            site5: [
                {
                    movieLength: 154,
                    name: 'Криминальное чтиво',
                },
            ],
            site6: [
                {
                    movieLength: 136,
                    name: 'Матрица',
                },
                {
                    movieLength: 111,
                    name: 'Рататуй',
                },
                {
                    movieLength: 141,
                    name: 'Поймай меня, если сможешь',
                },
                {
                    movieLength: 105,
                    name: 'Тайна Коко',
                },
            ],
        },
        sites7_12: {
            sites7_10: {
                sites7_8: {
                    site7: [
                        {
                            movieLength: 155,
                            name: 'Гладиатор',
                        },
                    ],
                    site8: [
                        {
                            movieLength: 98,
                            name: 'ВАЛЛ·И',
                        },
                    ],
                },
                site9: [
                    {
                        movieLength: 116,
                        name: 'Назад в будущее',
                    },
                ],
                site10: [
                    {
                        name: 'Леон',
                        movieLength: 133,
                    },
                ],
            },
            site11: [
                {
                    movieLength: 87,
                    name: 'Достучаться до небес',
                },
                {
                    name: 'Престиж',
                    movieLength: 125,
                },
            ],
            site12: [
                {
                    movieLength: 126,
                    name: 'Пятый элемент',
                },
                {
                    name: 'Душа',
                    movieLength: 106,
                },
                {
                    movieLength: 95,
                    name: 'Головоломка',
                },
            ],
        },
    },
};
function recursiveMovies(allMovies) {
    let summa = 0;
    for (let key in allMovies) {
        if (Array.isArray(allMovies[key]) === false) {
            // Рекурентный случай
            summa += recursiveMovies(allMovies[key]);
        } else {
            // Базовый случай
            summa += allMovies[key].reduce((acc, elem) => acc + elem.movieLength, 0);
        }
    }
    return summa;
}
let allTime = recursiveMovies(allMovies);

let hours = allTime / 60;
let minuts = allTime % 60;
console.log(`Для просмотра всех фильмов необходимо ${hours.toFixed(0)} ч. ${minuts} м.`);
