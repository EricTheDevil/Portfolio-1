import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactItem from '../Components/ContactItem';
import MainAnim from '../Components/MainAnim';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import Divider from '@material-ui/core/Divider';

gsap.registerPlugin(CSSRulePlugin);

function HomePageContent() {
	const heroRef = useRef();
	const contents = CSSRulePlugin.getRule('.white-line:before');

	useEffect(() => {
		const t1 = gsap.timeline();
		t1.to(contents, {
			delay: 0.5,
			duration: 4,

			cssRule: { scaleX: 1 },
		});
		t1.to(
			[heroRef.current],
			{
				duration: 2,
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			},
			'-=3'
		);
	}, []);

	return (
		//https://www.youtube.com/watch?v=dLYMzNmILQA&ab_channel=DesignCourse
		<header className="hero">
			<div className="white-line"></div>
			<div className="hero-content" ref={heroRef}>
				<h1 className="hero-text">
					<span> Eric Ng </span>
				</h1>
				<div className="hero-description">
					<p className="hero-sub-text">Developer</p>
					<Divider />
					<p className="hero-sub-text">Designer</p>
				</div>

				<div className="icons">
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faGithub} />
					</Link>
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} />
					</Link>
				</div>
			</div>
		</header>
	);
}
export default HomePageContent;
