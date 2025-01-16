import React from "react";

const CurrentWeather = ({ weather }) => {
    return (
        <>
            <h2>{weather.name}</h2>
            <p> Temp: {weather.temp}<sub>o</sub>C</p>
            <p>Condition: {weather.description}</p>
        </>
    )
}

export default CurrentWeather;