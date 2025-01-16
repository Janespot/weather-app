import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

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