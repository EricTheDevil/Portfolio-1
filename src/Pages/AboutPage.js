import React, { useRef, useEffect } from 'react';
import Tittle from '../Components/Tittle.js';
import ImageSection from '../Components/ImageSection.js';
import SkillsSection from '../Components/SkillsSection.js';
import ServiceSection from '../Components/ServiceSection.js';
import PortfoliosPage from '../Pages/PortfoliosPage';
import WhitePage from '../Components/WhitePage.js';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
	return (
		<div className="AboutPage">
			<div>
				<Tittle title={'About me'} />

				<ImageSection />
			</div>
		</div>
	);
}
export default AboutPage;
