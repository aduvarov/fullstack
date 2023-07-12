'use strict';

let cityInput = document.querySelector('.city');
let countryInput = document.querySelector('.country');
let getWeather = document.querySelector('.getWeather');
let result = document.querySelector('.results');
let headerCity = document.querySelector('.results__headerCity');
let headerCountry = document.querySelector('.results__headerCountry');
let currentWeather = document.querySelector('.results__currentWeatherData');
let todayWeather = document.querySelector('.results__todayWeatherData');
let threedayWeather = document.querySelector('.results__threedayWeatherData');
let day = document.querySelector('.results__day');
let night = document.querySelector('.results__night');
let tomorrow = document.querySelector('.results__tomorrow');

//https://api.weatherapi.com/v1/forecast.json?q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&days=1&key=aa71ded6ec744711b73142934230407

getWeather.addEventListener('click', () => {
    let city = cityInput.value;
    let country = countryInput.value;
    fetch(`https://api.weatherapi.com/v1/current.json?q=${city} ${country}&lang=ru&key=aa71ded6ec744711b73142934230407`)
        .then(data => {
            return data.json();
        })
        .then(json => {
            headerCity.innerText = `Погода в ${json.location.name}`;
            headerCountry.innerText = `${json.location.country}, ${json.location.region}`;
            currentWeather.innerHTML = `<img src="http:${json.current.condition.icon}" alt="weatherIcon">`;
            currentWeather.innerHTML += `${json.current.temp_c}<sup>&deg</sup>C `;
            currentWeather.innerHTML += `${json.current.condition.text}`;
        });

    fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${city} ${country}&days=1&lang=ru&key=aa71ded6ec744711b73142934230407`
    )
        .then(data => {
            return data.json();
        })
        .then(json => {
            day.innerHTML = `<img src="http:${json.forecast.forecastday[0].day.condition.icon}" alt="weatherIcon">`;
            day.innerHTML += `${json.forecast.forecastday[0].day.maxtemp_c}<sup>&deg</sup>C `;
            day.innerHTML += `${json.forecast.forecastday[0].day.condition.text}`;
            night.innerHTML = `<img src="http:${json.forecast.forecastday[0].day.condition.icon}" alt="weatherIcon">`;
            night.innerHTML += `${json.forecast.forecastday[0].day.mintemp_c}<sup>&deg</sup>C `;
            night.innerHTML += `${json.forecast.forecastday[0].day.condition.text}`;
        });
    fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${city} ${country}&days=2&lang=ru&key=aa71ded6ec744711b73142934230407`
    )
        .then(data => {
            return data.json();
        })
        .then(json => {
            console.log(json);
            tomorrow.innerHTML = `<img src="http:${json.forecast.forecastday[1].day.condition.icon}" alt="weatherIcon">`;
            tomorrow.innerHTML += `${json.forecast.forecastday[1].day.maxtemp_c}<sup>&deg</sup>C `;
            tomorrow.innerHTML += `${json.forecast.forecastday[1].day.mintemp_c}<sup>&deg</sup>C `;
            tomorrow.innerHTML += `${json.forecast.forecastday[1].day.condition.text}`;
        });
});
