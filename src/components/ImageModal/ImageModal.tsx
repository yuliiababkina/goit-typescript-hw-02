import Modal from "react-modal";
import { Image } from "../App/App.types";

import s from "./ImageModal.module.css";

type ImageModalProps = {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
};

function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={s.container}>
        <img
          src={image?.urls?.regular}
          alt={image?.alt_description}
          className={s.image}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
