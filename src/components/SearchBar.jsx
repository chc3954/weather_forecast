import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      const results = await fetchSuggestions(e.target.value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (query) => {
    const username = import.meta.env.VITE_GEO_NAME;
    const url = `http://api.geonames.org/searchJSON?name=${query}&maxRows=5&username=${username}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      return response.data.geonames.map(
        (place) => `${place.name}, ${place.adminName1}, ${place.countryName}`
      );
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      return [];
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
      setSuggestions([]);
    }
  };

  return (
    <div className="w-full p-4 first-line:fixed top-0 left-0 z-10 flex justify-center">
      <div className="relative">
        <input
          type="text"
          className="px-4 py-2 border rounded-lg capitalize"
          placeholder="Enter location"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-md mt-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
