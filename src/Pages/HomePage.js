import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactItem from '../Components/ContactItem';
import MainAnim from '../Components/MainAnim';
import HomePageContent from '../Components/HomePageContent';

function HomePage() {
	return (
		<div className="HomePage">
			<MainAnim />
			<HomePageContent />
		</div>
	);
}

export default HomePage;
