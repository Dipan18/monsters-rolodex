import { ChangeEventHandler } from 'react';

import './search-bar.styles.css';

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ className, placeholder, onChangeHandler }: SearchBarProps) => {
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
