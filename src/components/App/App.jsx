
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallerry from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { fetchArticles } from "../../api";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  
  
const handleSearch = async (newTopic) => {
  setLoading(true);
  setPhotos([]);
  setPage(1)
  setError(false);
  setSearchTopic(newTopic)
}
//
  // const handleSearch = (value) => {
  //   setSearchTopic(value);
  // };
  // useEffect(() => {
  //   if (searchTopic === "") {
  //     toast.error("Form is epmty! Apply the form!!!");
  //   }

  //   async function getPhotos() {
  //     if (searchTopic === "") {
  //       return;
  //     }
  //     try {
  //       setLoading(true);
  //       setPhotos([]);
  //       setError(false);
       
  //       const data = await fetchArticles(searchTopic, page);

  //       setPhotos(data);
  //       toast.success("Sucsess");
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   if (searchTopic) {
  //     getPhotos();
  //   }
  // }, [searchTopic, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (searchTopic === "") {
          toast.error("Form is epmty! Apply the form!!!");
        }
    async function getPhotos() {
      if (searchTopic === "") {
        return;
      }
      try {
        setLoading(true);

        setError(false);
        const data = await fetchArticles(searchTopic, page);
        setPhotos((prevPhotos)=>{
          return[...prevPhotos, ...data]});
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [searchTopic, page]);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallerry photos={photos} />}
      <Toaster />
      {photos.length > 0 && !loading &&  (<button onClick={handleLoadMore}>Load more</button>)}
    </div>
  );
}
