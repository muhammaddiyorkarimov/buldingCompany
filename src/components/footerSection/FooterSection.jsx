import React from 'react';
import './FooterSection.css';
import Button from '../buttons/Button';
import { useTranslation } from 'react-i18next';

function FooterSection() {
	const { t } = useTranslation();

	return (
		<div className='footer-section2'>
			<div className="container">
				<div className="footer-section-about">
					<div className="title">
						{t('get_estimate_calculation')}
					</div>
					<div className="name">{t('leave_a_request')}</div>
				</div>
				<div className="footer-section-inputs">
					<input type="text" placeholder={t('name2')} />
					<input type="text" placeholder={t('phone2')} />
					<Button text={t('send')} />
				</div>
			</div>
		</div>
	);
}

export default FooterSection;
