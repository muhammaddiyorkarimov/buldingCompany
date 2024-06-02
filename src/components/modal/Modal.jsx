import React, { useState } from 'react';
import './Modal.css';
import { useTranslation } from 'react-i18next'; 

function Modal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{t('contact_us3')}</h2>
        <p>{t('personal_manager_will_contact_you')}</p>
        <form>
          <input type="text" placeholder={t('name3')} />
          <input type="email" placeholder={t('email3')} />
          <input type="tel" placeholder={t('phone3')} />
          <div className="checkbox-container" onClick={toggleCheckbox}>
            <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
              <i className="fa-solid fa-check"></i>
            </div>
            <label htmlFor="agreement">{t('agree_to_processing')}</label>
          </div>
          <button type="button">{t('leave_request')}</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
