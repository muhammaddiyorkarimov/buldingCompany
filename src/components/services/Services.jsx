import { Link } from 'react-router-dom';
import './Services.css';
import { useTranslation } from 'react-i18next';

function Services() {
	const { t } = useTranslation(); 

	return (
		<div className='services'>
			<div className="container">
				<div className="wrapper">
					<div className="main-title">{t('what_we_can_do')}</div>
					<div className="services-about">
						<div className="title">
							<span>{t('individual')}</span> {t('house_design')}
						</div>
						<div className="description">
							{t('description_text')}
						</div>
						<div className="read-more">
							<Link to=''>{t('read_more_services')}</Link>
						</div>
					</div>
				</div>
				<div className="image">
					<i className="fa-solid fa-play"></i>
				</div>
			</div>
		</div>
	)
}

export default Services;
