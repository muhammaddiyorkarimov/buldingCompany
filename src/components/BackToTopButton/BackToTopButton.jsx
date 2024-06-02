
const BackToTopButton = () => {


	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="back-to-top">
			<button onClick={scrollToTop} className="back-to-top-button">
				<i className='fa-solid fa-arrow-up'></i>
			</button>
		</div>
	);
};

export default BackToTopButton;
