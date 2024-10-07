import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <div className="input-section">
          <span className="input-label">Where</span>
          <input type="text" placeholder="Search destinations" />
        </div>
        <div className="input-section">
          <span className="input-label">Check in</span>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="input-section">
          <span className="input-label">Check out</span>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="input-section">
          <span className="input-label">Who</span>
          <input type="text" placeholder="Add guests" />
        </div>
      </div>
      <button className="search-button">🔍</button>
    </div>
  );
};

export default SearchBar;
