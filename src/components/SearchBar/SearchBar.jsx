

export default function SearchBar({ query, setQuery, handleSubmit }) {
  
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
