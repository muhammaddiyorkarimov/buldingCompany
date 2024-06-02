import React from 'react';
import FooterSection from '../components/footerSection/FooterSection';
import img from '../images/aboutus.png';
import { useTranslation } from 'react-i18next'; 

function OurServices() {
	const { t } = useTranslation();

	return (
		<div className='our-services'>
			<div className="container">
				<div className="our-services-about">
					<div className="title">{t('home_services')}</div>
					<div className="name">{t('construction_of_houses_and_cottages')}</div>
					<p>
						{t('suitable_size_and_configuration')}
						<br />
						<br />
						{t('advantages')}
						<br />
						{t('comprehensive_contract')}
						<br />
						<br />
						{t('quality2')}
						<br />
						<br />
						{t('cooperation')}
						<br />
						<br />
						{t('related_services')}
					</p>
				</div>
				<div className="image">
					<i className="fa-solid fa-play"></i>
				</div>
			</div>
			<FooterSection />
		</div>
	);
}

export default OurServices;
