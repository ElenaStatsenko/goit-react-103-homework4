
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

export default function ModalComponent({ isOpen, onRequestClose, imageUrl, description }) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div>
          <img src={imageUrl} alt={description} />
          <p>{description}</p>
          <button onClick={onRequestClose}>Close</button>
        </div>
      </Modal>
    );
  }