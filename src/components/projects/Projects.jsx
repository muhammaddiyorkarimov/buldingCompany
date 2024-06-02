import React, { useState } from 'react';
import './Projects.css';
import image1 from '../../images/project1.png';
import image2 from '../../images/project2.png';
import image3 from '../../images/project3.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Projects() {
	const { t } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const items = [
		{ src: image1, label: t('forest_house_novosibirsk') },
		{ src: image2, label: t('cottage_krasnodar') },
		{ src: image3, label: t('cottage_novgorod') },
	];

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
	};

	const getVisibleItems = () => {
		const prevIndex = (currentIndex - 1 + items.length) % items.length;
		const nextIndex = (currentIndex + 1) % items.length;
		return [prevIndex, currentIndex, nextIndex];
	};

	const visibleItems = getVisibleItems();

	const progressBarWidth = `${((currentIndex + 1) / items.length) * 100}%`;

	return (
		<div className='projects'>
			<div className="container">
				<div className="main-title">{t('projects2')} <div className="title">{t('company_projects')}</div></div>
				<div className="carousel">
					<div className="carousel-container">
						{visibleItems.map((index, idx) => (
							<div className={`carousel-item ${idx === 1 ? 'center-item' : ''}`} key={index}>
								<img src={items[index].src} alt={`Image ${index + 1}`} />
								<div className="projects-more">
									<Link>{items[index].label}</Link>
									<div>&gt;</div>
								</div>
							</div>
						))}
					</div>
					<div className="carousel-controls">
						<div className="arrow2 left-arrow" onClick={handlePrev}>&lt;</div>
						<div className="progress-bar">
							<div className="progress" style={{ width: progressBarWidth }}></div>
						</div>
						<div className="arrow2 right-arrow" onClick={handleNext}>&gt;</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
