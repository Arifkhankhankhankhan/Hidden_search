import React, { useState } from 'react';
 // Import your CSS file

const HiddenSearch = () => {
    const [isActive, setIsActive] = useState(false); // State to track whether the search bar is active

    const toggleSearch = () => {
        setIsActive(!isActive); // Toggle the isActive state
    };

    return (
        <div className="container">
            <div className={`search-container ${isActive ? 'active' : ''}`}>
                <input
                    type="text"
                    className="input"
                    placeholder="Search.."
                    autoFocus={isActive} // Automatically focuses the input field when active
                />
                <button className="button" onClick={toggleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default HiddenSearch;
