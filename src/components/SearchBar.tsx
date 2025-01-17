import React, { useState } from "react";
import citydata from "../assets/city.list.json";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    console.log(citydata);

    const handleSearch = () => {
        if(city.trim()) onSearch(city);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter City Name Here"
                onChange={e => setCity(e.currentTarget.value)}
                value={city}
            />
            <button type="button" onClick={handleSearch}>Search</button>
        </>
    )
}

export default SearchBar;