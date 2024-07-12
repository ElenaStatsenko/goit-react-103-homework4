import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallerry from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { fetchArticles } from "../../api";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (value) => {
    setSearchTopic(value);
  };

  useEffect(()=>{
  
    async function getPhotos(){
      if (searchTopic === ""){
        return
       }
    try{
      setLoading(true);
      const data = await fetchArticles(searchTopic);
      console.log(data);
      setPhotos(data)
      console.log(setPhotos)
    } catch (error){
      setError(true);
    } finally{
      setLoading(false)
    }}
    if (searchTopic) {
      getPhotos();
    }
  }, [searchTopic])


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {photos.length > 0 && <ImageGallerry photos={photos} />}
    </div>)}