import React from "react";

const CurrentWeather = ({ weather }) => {
    return (
        <>
            <h2>{weather.name}</h2>
            <p> Temp: {weather.main.temp}<sup>o</sup>C</p>
            <p>Condition: {weather.weather[0].description}</p>
        </>
    )
}

export default CurrentWeather;