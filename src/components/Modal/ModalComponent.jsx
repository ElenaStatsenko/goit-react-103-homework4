import Modal from "react-modal";

export default function ModalComponent({ closeModal, modalLink, modalIsOpen }) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div>
        <img src={modalLink} alt={`description`} />
      </div>
    </Modal>
  );
}
