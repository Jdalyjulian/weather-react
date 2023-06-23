import React from "react";
import axios from "axios";

export default function Weather (props){
    function showTemperature(response){
    alert (`The temperature in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return <h2>Hello from Weather</h2>;
}