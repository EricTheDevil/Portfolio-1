import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

function SkillsSection({ icon, skill, progress, years }) {
	return (
		<div className="SkillsSection">
			<div className="skills-container">
				<div className="skill-icon">
					<FontAwesomeIcon icon={['fab', icon]} />
				</div>
				<h1 className="skill-title">{skill}</h1>
				<h1 className="skill-years">
					<span> {years} years of exp</span>
				</h1>
				<div className="skill-bar">
					<div className="skill-progress">
						<span>{progress}</span>
						<div className="progress">
							<div className="inner-progress" style={{ width: progress }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
