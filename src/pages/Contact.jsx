import React from 'react';
import FooterSection from '../components/footerSection/FooterSection';
import Button from '../components/buttons/Button';
import { useTranslation } from 'react-i18next'; 

function Contact() {
  const { t } = useTranslation(); 
  return (
    <div className='main-contact'>
      <div className="container">
        <div className="main-contact-about">
          <span className="title">{t('home2')} - {t('contacts4')}</span>
          <div className="name">{t('contacts4')}</div>
          <span>{t('our_office2')}:</span>
          <p>{t('office_address2')}</p>
          <p>{t('office_hours2')}</p>
          <p>+8 800 800 80 80</p>
          <span>{t('call_hours')}:</span>
          <span>{t('email4')}:</span>
          <p>ForestINVERONMENTAL@mail.ru</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <Button text={t('contact_us4')}/>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1545583.3936040287!2d69.200593975!3d40.83416695037716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIxJzU2LjAiTiA3McKwNDcnMDEuMCJF!5e0!3m2!1sen!2s!4v1716969096489!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default Contact;
