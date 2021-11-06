import "./App.css";
import Header from "./components/ui/Header";
import { useEffect, useState } from "react";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const baseApiURL = "https://www.breakingbadapi.com/api/";
  useEffect(() => {
    async function fetchItems() {
      const result = await fetch(`${baseApiURL}characters?name=${query}`);
      const json = await result.json();
      console.log(json);
      setItems((items) => json);
      setIsLoading(false);
    }
    fetchItems().then();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
