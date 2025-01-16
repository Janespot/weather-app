import React, { useState } from "react";
import SearchBar from './SearchBar.tsx';
import axios from "axios";
import CurrentWeather from "./CurrentWeather.tsx";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city: string) => {
        try {
            //the url below will be changed on deployment to reflect the deployment url for the server
            const response = await axios.get("http://localhost:5000/weather", {
                params: { city }
            });
            setWeather(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <>
            <SearchBar onSearch={fetchWeather} />
            {weather && <CurrentWeather weather={weather} />}
        </>
    )
}

export default Weather;