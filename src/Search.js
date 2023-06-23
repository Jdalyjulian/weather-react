import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState(" ");
  let [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    setSubmitted(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
        name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let form = (
    <form onSubmit={handleSubmit} className="Search" id="search-form" >
      <div className="row">
        <div className="col-9">
            <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
                id="city-input"
                autocomplete="off"
                onChange={updateCity}
            />
        </div>
        <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100"/>
        </div>
      </div>
    </form>
  );

  if (submitted) {
    return (
      <div>
        {form}
        <ul className="WeatherResults">
        <li>
            <h1>{weather.name}</h1>
          </li>
          <li>
            <strong>Temperature</strong>: {Math.round(weather.temperature)}°C
          </li>
          <li>
            <strong> Description </strong>: {weather.description}
          </li>
          <li>
            <strong>Humidity</strong>: {weather.humidity}%
          </li>
          <li>
            <strong>Wind</strong>: {Math.round(weather.wind)} km/h
          </li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
        <Forecast />
      </div>
    );
  } else {
    return <div> {form} </div>;
  }
}
