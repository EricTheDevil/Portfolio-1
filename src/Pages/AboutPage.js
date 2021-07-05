import React from 'react';
import Tittle from '../Components/Tittle.js';
import ImageSection from '../Components/ImageSection.js';
import SkillsSection from '../Components/SkillsSection.js';

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={'About me'} span={'About me'} />
			<ImageSection />
			<Tittle title={'My Skills'} span={'Hmm'} />
			<div className="skill-about">
				<SkillsSection skill={'javascript'} progress={'50%'} />
				<SkillsSection skill={'javascript'} progress={'50%'} />
				<SkillsSection skill={'javascript'} progress={'50%'} />
			</div>
			<div className="services-about"></div>
		</div>
	);
}
export default AboutPage;
