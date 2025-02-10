import { useState, useEffect } from "react";
import Modal from "react-modal";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

import { fetchImages } from "../../services/api";
import { Image } from "./App.types";

import s from "./App.module.css";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const openModal = (imageId: Image) => {
    setModalIsOpen(true);
    setModalImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
    document.body.style.overflow = "";
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImagesData = async () => {
      setIsLoading(true);
      try {
        setIsError(false);

        const data = await fetchImages(query, page);
        if (page === 1) {
          setTotalPages(data.total);
        }

        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImagesData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />
      <div className={s.dvh}>
        {isError && <ErrorMessage />}
        {images && <ImageGallery images={images} onOpenModal={openModal} />}
        {isLoading && <Loader />}
        {images.length > 0 && page < totalPages && (
          <LoadMoreBtn onChangePage={handleChangePage} />
        )}

        {modalIsOpen && (
          <ImageModal
            image={modalImage}
            isOpen={modalIsOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
