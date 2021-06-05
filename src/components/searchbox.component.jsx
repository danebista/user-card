import React from 'react';
import './searchbox.css';

export const SearchBox = ({ placeholder, handleChange })=>(
    <div className = "tweets-search-container">
         <input type="search"
        placeholder = { placeholder }
        onChange = { handleChange } />
    </div> 
)
