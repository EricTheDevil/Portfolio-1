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
import ContactForm from './ContactForm';
import ContactFormComp from './ContactFormComp';

function HomePageContent() {
	const heroRef = useRef();
	const bottomRef = useRef();
	const arrowRef = useRef();

	// Effect for starting animation on homescreen
	const t1 = gsap.timeline();
	const t2 = gsap.timeline({ repeat: -1 });

	// Effect for moving up and down
	useEffect(() => {
		t2.to([arrowRef.current], {
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
				<div className="hero-text">
					<span> Eric Ng </span>
				</div>
				<div className="hero-description">
					<p className="hero-sub-text">Developer</p>
					<Divider orientation="vertical" flexItem />
					<p className="hero-sub-text">Designer</p>
				</div>

				<div className="icons">
					<a href="https://github.com/EricTheDevil" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a
						href="https://fi.linkedin.com/in/ericthedevil"
						className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
				<div
					className="arrowDown"
					ref={arrowRef}
					onClick={() => {
						gsap.to(window, {
							scrollTo: {
								y: '.AboutPage',
								offsetY: 100,
							},
						});
					}}>
					<KeyboardArrowDownIcon />
				</div>
			</div>
		</header>
	);
}
export default HomePageContent;
