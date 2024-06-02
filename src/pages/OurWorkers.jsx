import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../components/buttons/Button';
import img from '../images/project2.png';
import icon from '../images/icon1.png';
import Projects from '../components/projects/Projects';
import Partners from '../components/partners/Partners';
import Footer from './../components/footer/Footer';

function OurWorkers() {
	const { t } = useTranslation();

	return (
		<div>
			<div className="one-project">
				<div className="container">
					<div className="one-project-about">
						<div className="title"><span>{t('home_projects')}</span> - {t('cottage_in_krasnodar')}</div>
						<div className="name">{t('cottage_in_krasnodar')}</div>
						<div className="description">
							{t('implementation_of_planned_tasks')}
						</div>
						<Link>
							<Button text={t('contact_us2')} />
						</Link>
						<div className="one-project-counter">
							01/ <span>04</span>
						</div>
					</div>
					<div className="image">
						<img src={img} alt="" />
					</div>
				</div>
			</div>
			<div className="cottage">
				<div className="container">
					<div className="cottage-about">
						<div className="title">{t('description_of_cottage')}</div>
						<p>
							{t('everyday_practice')} <br />
						</p>
					</div>
					<div className="cottage-list">
						<div className="list">
							<p>{t('address')}</p>
							<p>{t('area')}</p>
							<p>{t('materials')}</p>
							<p>{t('term')}</p>
							<p>{t('storey')}</p>
							<Button text={t('calculate_similar_project')} />
						</div>
						<div className="list">
							<p>{t('krasnodar_city_chilanzar_district')}</p>
							<p>49 215 М2</p>
							<p>{t('concrete_cement_gypsum')}</p>
							<p>{t('built_in_12_months')}</p>
							<p>24 {t('floors')}</p>
							<div>
								<img src={icon} alt="" />
								<span>{t('our_experts_will_calculate')}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Projects />
			<Partners />
			<Footer />
		</div>
	);
}

export default OurWorkers;
