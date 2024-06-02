import React from 'react'
// components
import Slider from '../components/slider/Slider'
import AboutUs from '../components/aboutUs/AboutUs'
import Services from '../components/services/Services'
import OurResults from '../components/ourResults/OurResults'
import Projects from '../components/projects/Projects'
import Partners from '../components/partners/Partners'
import Footer from './../components/footer/Footer';

function Home() {
	return (
		<div className='Home'>
				<Slider/>
				<AboutUs/>
				<Services/>
				<OurResults/>
				<Projects/>
				<Partners/>
				<Footer/>
		</div>
	)
}

export default Home