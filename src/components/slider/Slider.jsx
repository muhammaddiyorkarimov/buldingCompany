import React, { useState } from 'react';
import './Slider.css';
import { useTranslation } from 'react-i18next'; 

import image1 from '../../images/main background image2.png';
import image2 from '../../images/header section.png';
import Button from '../buttons/Button';

const images = [
	image1,
	image1,
	image1,
	image1,
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [prevSlide, setPrevSlide] = useState(null);
	const { t } = useTranslation();

	const nextSlide = () => {
		setPrevSlide(currentSlide);
		setCurrentSlide((prevSlide) =>
			prevSlide === images.length - 1 ? 0 : prevSlide + 1
		);
	};

	return (
		<div className="slider">
			<div className="slides">
				{images.map((image, index) => (
					<div
						key={index}
						className={`slide ${index === currentSlide ? 'active' : ''} ${index === prevSlide ? 'prev' : ''}`}
						style={{ backgroundImage: `url(${image})` }}
					>
					</div>
				))}
				<div className="slides-about">
					<div className="title">{t('in_the_forest')} <br /> <span>{t('away_from_noise')}</span></div>
					<div className="description">{t('planned_tasks_implementation')}</div>
					<Button text={t('contact_us')} />
				</div>
				<div className="video">
					<i className="fa-solid fa-play"></i>
				</div>
				<div className="header-section">
					<div className="about2">
						<p>{t('minsk')}</p>
						<span>12.06.2021</span>
					</div>
					<div className="video2">
						<i className="fa-solid fa-play"></i>
					</div>
				</div>
			</div>
			<div className="indicators">
				{images.map((_, index) => (
					<span
						key={index}
						className={`indicator ${index === currentSlide ? 'active' : ''}`}
						onClick={() => {
							setPrevSlide(currentSlide);
							setCurrentSlide(index);
						}}
					></span>
				))}
			</div>
			<div className="arrow" onClick={nextSlide}>
				↓
			</div>
			<div className="counter">
				{currentSlide + 1}/<span>{images.length}</span>
			</div>
		</div>
	);
};

export default Slider;
