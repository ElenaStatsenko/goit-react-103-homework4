import { useState } from 'react';
import ModalComponent from '../App/Modal/ModalComponent';
export default function ImageCard({ description, smallUrl, regularUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
    <img src={smallUrl} alt={description} onClick={openModal} style={{ cursor: 'pointer' }} />
    <ModalComponent
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      imageUrl={regularUrl}
      description={description}
    />
  </div>
  );
}
