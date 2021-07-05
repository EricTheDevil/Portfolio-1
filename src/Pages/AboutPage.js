import React from 'react';
import Tittle from '../Components/Tittle.js';
import ImageSection from '../Components/ImageSection.js';
import SkillsSection from '../Components/SkillsSection.js';
import ServiceSection from '../Components/ServiceSection.js';

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
			<div className="services-about">
				<ServiceSection
					image={
						'https://cdn.iconscout.com/icon/premium/png-256-thumb/cute-2279057-1918870.png'
					}
					title={'Web'}
					text={'A'}></ServiceSection>
				<ServiceSection
					image={
						'https://cdn.iconscout.com/icon/premium/png-256-thumb/cute-2279057-1918870.png'
					}
					title={'Web'}
					text={'A'}></ServiceSection>
				<ServiceSection
					image={
						'https://cdn.iconscout.com/icon/premium/png-256-thumb/cute-2279057-1918870.png'
					}
					title={'Web'}
					text={'A'}></ServiceSection>
			</div>
		</div>
	);
}
export default AboutPage;
