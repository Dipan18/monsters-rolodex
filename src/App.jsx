import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [searchResult, setSearchResult] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setSearchResult(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBar
        className="search-bar"
        placeholder="Search Monsters..."
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={searchResult} />
    </>
  );
};

export default App;
