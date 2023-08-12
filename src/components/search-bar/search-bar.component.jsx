import { Component } from 'react';

import './search-bar.styles.css';

const SearchBar = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
