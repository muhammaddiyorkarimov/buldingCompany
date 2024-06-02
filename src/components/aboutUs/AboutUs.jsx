import './AboutUs.css';
import { useTranslation } from 'react-i18next'; 

function AboutUs() {
	const { t } = useTranslation(); 

	return (
		<div className='about-us'>
			<div className="container">
				<div className="main-title">{t('about_us')}</div>
				<div className="wrapper">
					<div className="aboutUs-about">
						<div className="title"><span>{t('principles')}</span> {t('we_follow')}</div>
						<div className="items">
							<div className="item">
								<span>01</span>
								<div className="name">{t('quality')}</div>
								<p className="description">
									{t('quality_description')}
								</p>
							</div>
							<div className="item">
								<span>02</span>
								<div className="name">{t('creativity')}</div>
								<p className="description">
									{t('creativity_description')}
								</p>
							</div>
							<div className="item">
								<span>03</span>
								<div className="name">{t('modernity')}</div>
								<p className="description">
									{t('modernity_description')}
								</p>
							</div>
						</div>
					</div>
					<div className="image">
						<i className="fa-solid fa-play"></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs;
