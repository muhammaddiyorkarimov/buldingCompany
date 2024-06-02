import React, { useState } from 'react';
import Button from '../buttons/Button';
import { useTranslation } from 'react-i18next';
import './Footer.css' 
function Footer() {
	const { t } = useTranslation();

	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<footer>
				<div className="container">
					<div className="consultation">
						<h2>{t('consultation2')}</h2>
						<p>{t('personal_manager_will_contact')}</p>
						<form>
							<div className="input-container">
								<input type="text" id="name" required />
								<label htmlFor="name">{t('name')}</label>
							</div>
							<div className="input-container">
								<input type="email" id="email" required />
								<label htmlFor="email">{t('email')}</label>
							</div>
							<div className="input-container">
								<input type="tel" id="phone" required />
								<label htmlFor="phone">{t('phone')}</label>
							</div>
							<label className="checkbox-label" onClick={toggleCheckbox}>
								<div className={`checkbox ${isChecked ? 'checked' : ''}`}>
									<i className="fa-solid fa-check"></i>
								</div>
								<span>{t('agree_with_data_processing')}</span>
							</label>
							<Button text={t('submit_application')} />
						</form>
					</div>
					<div className="contacts">
						<h2>{t('contacts2')}</h2>
						<span>{t('our_office')}</span>
						<p>
							{t('office_address')} <br />
							{t('office_hours')} <br />
							{t('phone_number')} <br />
						</p>
						<p>{t('phone_number')}</p>
						<div className="social-icons">
							<i className="fab fa-facebook-f"></i>
							<i className="fab fa-youtube"></i>
							<i className="fab fa-instagram"></i>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;
