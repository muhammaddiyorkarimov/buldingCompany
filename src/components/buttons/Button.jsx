import { useState } from 'react';
import './Button.css';
import Modal from '../modal/Modal';

function Button({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type='button'
        className='animated-button'
        onClick={handleOpenModal}
      >
        <span>{text}</span>
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Button;
