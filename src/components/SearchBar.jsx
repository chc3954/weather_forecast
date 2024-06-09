import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="fixed top-0 my-3 left-1/2 -translate-x-1/2">
      <input
        type="text"
        className="w-80 px-4 py-2 border rounded-lg"
        placeholder="Enter location"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
