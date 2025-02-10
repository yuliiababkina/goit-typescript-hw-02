import { Image } from "../App/App.types";
import s from "./ImageCard.module.css";

type ImageCardProps = {
  image: Image;
  onOpenModal: (image: Image) => void;
};

function ImageCard({ image, onOpenModal }: ImageCardProps) {
  return (
    <div className={s.galleryImage}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => {
          onOpenModal(image);
        }}
      />
    </div>
  );
}

export default ImageCard;
