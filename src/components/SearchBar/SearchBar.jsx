import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
