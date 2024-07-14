export default function SearchBar({ handleSubmit }) {
  const getTopic = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    handleSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={getTopic}>
        <input
          type="text"
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
