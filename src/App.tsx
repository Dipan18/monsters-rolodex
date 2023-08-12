import { useState, useEffect, ChangeEvent } from 'react';

import { fetchData } from './utils/data.util';

import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

import './App.css';

type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchResult, setSearchResult] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetchData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setSearchResult(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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
