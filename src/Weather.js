import React from "react";
import axios from "axios";
import { Grid } from  'react-loader-spinner'

export default function Weather (props){
    function showTemperature(response){
    alert (`The temperature in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return <Grid
    height="80"
    width="80"
    color="aqua"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />;
}