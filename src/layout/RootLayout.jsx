import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RootLayout.css';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.body.classList.add('no-scroll'); // Add this line
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('no-scroll'); // Add this line
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.classList.remove('no-scroll'); // Add this line
    };
  }, [menuOpen]);

  return (
    <div>
      <header>
        <div className="container">
          <NavLink to="/" className="logo">FOREST <br /> <span>ENVIRONMENTAL</span></NavLink>
          <nav className='navbar'>
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/services">{t('services')}</NavLink>
            <NavLink to="/our-workers">{t('projects')}</NavLink>
            <NavLink to="/">{t('consultation')}</NavLink>
            <NavLink to="/contacts">{t('contacts')}</NavLink>
          </nav>
          {menuOpen && <div className="sidebar open">
            <div className='sidebar-wrapper'>
              <NavLink to="/" className="logo">FOREST <br /> <span>ENVIRONMENTAL</span></NavLink>
              <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/">{t('home')}</NavLink>
                <NavLink to="/services">{t('services')}</NavLink>
                <NavLink to="/our-workers">{t('projects')}</NavLink>
                <NavLink to="/">{t('consultation')}</NavLink>
                <NavLink to="/contacts">{t('contacts')}</NavLink>
              </nav>
            </div>
            <div className={`social-icons ${menuOpen ? 'open' : ''}`}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>}
          <div className="header-controls">
            <div className="language-selector">
              <button className='main-language' onClick={() => toggleDropdown('language-selector')}>
                {t('language')}
                <i className={`fa-solid ${activeDropdown === 'language-selector' ? 'fa-chevron-down' : 'fa-chevron-left'}`}></i>
              </button>
              {activeDropdown === 'language-selector' && (
                <div className="dropdown">
                  <button onClick={() => changeLanguage('uz')}>Uzbek</button>
                  <button onClick={() => changeLanguage('en')}>English</button>
                  <button onClick={() => changeLanguage('ru')}>Russian</button>
                </div>
              )}
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='social-icons'>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <header className='footer-section'>
        <div className="container">
          <NavLink to="/" className="logo">FOREST <br /> <span>ENVIRONMENTAL</span></NavLink>
          <p>{t('footer_text')}</p>
          <nav className='navbar'>
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
            <NavLink to="/services">{t('services')}</NavLink>
            <NavLink to="/projects">{t('projects')}</NavLink>
            <NavLink to="/consultation">{t('consultation')}</NavLink>
            <NavLink to="/contacts">{t('contacts')}</NavLink>
          </nav>
          <div className="header-controls">
            <div className="page-top">
              <BackToTopButton />
            </div>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default RootLayout;
