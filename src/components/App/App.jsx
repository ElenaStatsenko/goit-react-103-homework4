import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallerry from "../ImageGallery/ImageGallery";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTopic, setSearchTopic] = useState([]);

  const handleSearch = (value) => {
    setSearchTopic(value);
  };

  const KEY = "hz6DtNu86WDq2eHwrs231CdhsA0ERXri0mKKnpcZtbI";
  const topic = "cat";
  const page = "1";

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${topic}&client_id=${KEY}`
      );
      setPhotos(response.data.results);
    }

    fetchArticles();
  }, [searchTopic]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageGallerry photos={photos} />
    </div>
  );
}
