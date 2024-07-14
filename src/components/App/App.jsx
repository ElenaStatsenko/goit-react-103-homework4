import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallerry from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { fetchArticles } from "../../api";
import ModalComponent from "../Modal/ModalComponent";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalLink, setModalLink] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (query === "") {
      toast.error("Form is empty! Apply the form!!!");
      return;
    }

    handleSearch(query);
    form.reset();
    setQuery("");
  };
  const handleSearch = async (newTopic) => {
    setLoading(true);
    setPhotos([]);
    setPage(1);
    setError(false);
    setSearchTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (searchTopic === "") {
      // Добавлено условие для игнорирования первоначальной загрузки
      return;
    }
    async function getPhotos() {
      try {
        setLoading(true);

        setError(false);
        const data = await fetchArticles(searchTopic, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [searchTopic, page]);

  const openModal = (value) => {
    setModalIsOpen(true);
    setModalLink(value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallerry openModal={openModal} photos={photos} />
      )}
      <Toaster />
      {photos.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      <ModalComponent
        closeModal={closeModal}
        modalLink={modalLink}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}
