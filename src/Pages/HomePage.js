import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hello I'm
					<span> Eric Ng </span>
				</h1>
				<p className="h-sub-text"> and I'm a full-stack web developper.</p>
				<div className="icons">
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faGithub} />
					</Link>
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} />
					</Link>
				</div>
			</header>
		</div>
	);
}

export default HomePage;
