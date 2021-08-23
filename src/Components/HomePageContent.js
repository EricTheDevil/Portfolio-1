import React, { useRef, useEffect, lazy } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactItem from '../Components/ContactItem';
import MainAnim from '../Components/MainAnim';

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Divider from '@material-ui/core/Divider';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

//GSAP plugin register
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

function HomePageContent() {
	const heroRef = useRef();
	const bottomRef = useRef();
	const arrowRef = useRef();

	const contents = CSSRulePlugin.getRule('.white-line:before');

	// Effect for starting animation on homescreen
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
			'-=2'
		);
		// Hides the animation
	}, []);

	// Effect for moving up and down
	useEffect(() => {
		const t1 = gsap.timeline({ repeat: -1 });
		t1.to([arrowRef.current], {
			duration: 1,
			y: -8,
			yoyo: true,
		});
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
					<Divider orientation="vertical" flexItem />
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
				<div className="arrowDown" ref={arrowRef}>
					<KeyboardArrowDownIcon />
				</div>
			</div>
		</header>
	);
}
export default HomePageContent;
