import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallerry from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTopic, setSearchTopic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (value) => {
    setSearchTopic(value);
  };

  
  useEffect(() => {
    
    async function fetchArticles() {
      try{
        setLoading(true);
        setError(false)
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${searchTopic}&client_id=${KEY}`
      );
      setPhotos(response.data.results);} catch (error){
        setError(true);
        

      }finally{setLoading(false);}
    }

    fetchArticles();
  }, [searchTopic]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {photos.length > 0 && <ImageGallerry photos={photos} />}
    </div>)}