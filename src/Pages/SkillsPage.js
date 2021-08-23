import React, { useRef } from 'react';

function SkillsPage() {
	return (
		<div className="SkillsPage">
			<Tittle title={'My Skills'} span={''} />
			<div className="skill-about">
				<SkillsSection
					icon={'js'}
					skill={'javascript'}
					progress={'80%'}
					years={'2'}
				/>
				<SkillsSection
					icon={'html5'}
					skill={'HTML'}
					progress={'70%'}
					years={'2'}
				/>
				<SkillsSection
					icon={'css3'}
					skill={'CSS'}
					progress={'70%'}
					years={'2'}
				/>
				<SkillsSection
					icon={'sass'}
					skill={'SCSS'}
					progress={'60%'}
					years={'1'}
				/>
				<SkillsSection
					icon={'node'}
					skill={'NodeJS'}
					progress={'60%'}
					years={'1.5'}
				/>
			</div>
			<Tittle title={'Tools/Frameworks'} span={''} />
			<div className="skill-about">
				<SkillsSection
					icon={'unity'}
					skill={'unity'}
					progress={'80%'}
					years={'2'}
				/>
				<SkillsSection
					icon={'html5'}
					skill={'HTML/CSS'}
					progress={'80%'}
					years={'2'}
				/>
				<SkillsSection
					icon={'sass'}
					skill={'SCSS'}
					progress={'60%'}
					years={'1'}
				/>
				<SkillsSection
					icon={'node'}
					skill={'NodeJS'}
					progress={'60%'}
					years={'1.5'}
				/>
				<SkillsSection
					icon={'unity'}
					skill={'C#'}
					progress={'50%'}
					years={'2'}
				/>
			</div>
			<Tittle title={'stacks'} span={''} />
			<div className="skill-about">
				<SkillsSection icon={''} skill={'MERN'} progress={'70%'} years={'1'} />
				<SkillsSection
					icon={''}
					skill={'JAMSTACK'}
					progress={'75%'}
					years={'1'}
				/>
			</div>
		</div>
	);
}

export default SkillsPage;
