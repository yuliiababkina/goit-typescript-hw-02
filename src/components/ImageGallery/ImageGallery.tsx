import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  onOpenModal: (image: Image) => void;
};

const ImageGallery = ({ images, onOpenModal }: ImageGalleryProps) => {
  return (
    <ul className={s.imagesList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.imagesItem}>
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
