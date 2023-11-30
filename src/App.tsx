import { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";

import { getData } from "./utils/fetch.data";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchText, setSearchtext] = useState("");
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchtext(searchFieldString);
  };

  return (
    <div className="app">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default App;
