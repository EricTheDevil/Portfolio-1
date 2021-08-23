import React from 'react';
import Tittle from '../Components/Tittle.js';
import ImageSection from '../Components/ImageSection.js';
import SkillsSection from '../Components/SkillsSection.js';
import ServiceSection from '../Components/ServiceSection.js';
import PortfoliosPage from '../Pages/PortfoliosPage';
import WhitePage from '../Components/WhitePage.js';

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={'About me'} span={'About me'} />
			<ImageSection />
		</div>
	);
}
export default AboutPage;
