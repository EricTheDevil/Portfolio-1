import React, { useRef, useEffect } from 'react';

import MainAnim from '../Components/MainAnim';
import HomePageContent from '../Components/HomePageContent';
import HomePageAnimation from '../Components/HomePageAnimation';
import Ring from '../Img/ring.png';
import { gsap } from 'gsap';
import HomePageParticle from '../Components/HomePageParticle';
import { render, events, Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

function HomePage() {
	const homeRef = useRef();

	const loadingScreenRef = useRef();
	const logoRef = useRef();
	const loaderRef = useRef();

	const ringOneRef = useRef();
	const loadingScreenTwoRef = useRef();
	const ringTwoRef = useRef();

	// Effect for starting animation on homescreen
	const t1 = gsap.timeline();
	const t2 = gsap.timeline({ repeat: -1 });

	const contents = CSSRulePlugin.getRule('.white-line:before');

	// Append the sphere to the canvas element created
	useEffect(() => {
		window.addEventListener('resize', () =>
			render(<HomePageParticle />, document.querySelector('.animation'), {
				events,
				linear: true,
				camera: { fov: 20, position: [0, 0, 6] },
				// https://barradeau.com/blog/?p=621
				// This examples needs WebGL1 (?)
				gl: new THREE.WebGL1Renderer({
					canvas: document.querySelector('.animation'),
					antialias: true,
					alpha: true,
				}),
			})
		);
		window.dispatchEvent(new Event('resize'));
	}, []);

	function EntranceAnim() {
		const t1 = gsap.timeline();
		t1.to(homeRef.current, {
			duration: 2,
			clipPath: ' polygon(0 0, 100% 0, 100% 50%, 0 50%)',
		});
	}
	useEffect(() => {
		t1.to(contents, {
			delay: 0.5,
			duration: 4,
			cssRule: { scaleX: 1 },
		});
		t1.to(
			[homeRef.current],
			{
				duration: 2,
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			},
			'<'
		);
		// Hides the animation
	}, []);
	useEffect(() => {
		t1.from(ringOneRef.current, {
			opacity: 1,
			x: '-200%',
			ease: 'Slowmo.easeInOut',
			duration: 1,
		});
		t1.from(
			ringTwoRef.current,
			{
				opacity: 1,
				x: '200%',
				ease: 'Slowmo.easeInOut',
				duration: 1,
			},
			'<'
		);
		t1.to(ringOneRef.current, {
			opacity: 0,
			y: '200%',
			ease: 'Slowmo.easeInOut',
			duration: 1,
		});
		t1.to(
			ringTwoRef.current,
			{
				opacity: 1,
				y: '-100%',
				ease: 'Slowmo.easeInOut',
				duration: 1,
			},
			'<'
		);
		t1.set(
			ringTwoRef.current,
			{
				position: 'fixed',
			},
			'<0.5'
		);

		gsap.to(loadingScreenRef.current, {
			delay: 2,
			top: '-110%',
			ease: 'Expo.easeInOut',
		});
		gsap.to(
			loadingScreenTwoRef.current,
			{
				top: '200%',
				opacity: 0,
				display: 'none',
				ease: 'Expo.easeInOut',
			},
			'<'
		);
	}, []);
	/*
	// Scrollport
	useEffect(() => {
		let t3 = gsap.timeline({
			scrollTrigger: {
				trigger: homeRef.current,
				start: 'bottom bottom',

				scrub: true,
				// set the transformOrigin so that it's in the center vertically of the viewport when the element's bottom hits the bottom of the viewport
				onRefresh: () =>
					gsap.set(homeRef.current, {
						transformOrigin: 'center ',
					}),
			},
		});

		t3.fromTo(
			homeRef.current,
			{ y: 0, rotate: 0, scale: 1, opacity: 1 },
			{ y: 0, rotateX: 0, scale: 0.5, opacity: 0.5 },
			0
		).to(homeRef.current, { opacity: 0 });
	});
*/

	return (
		<div className="HomePage" ref={homeRef}>
			{/* 
			<div className="loading-screen" ref={loadingScreenRef}></div>

			<div className="loader" ref={loaderRef}>
				<div className="ringOne ring" ref={ringOneRef}>
					<img src={Ring} alt=""></img>
				</div>
				<div className="ringTwo ring" ref={ringTwoRef}>
					<img src={Ring} alt=""></img>
				</div>
			</div>
			<div className="loading-screen-two" ref={loadingScreenTwoRef}></div>
			*/}
			<div className="animation-container">
				<canvas className="animation"></canvas>

				<div useRef={loaderRef} />
				<HomePageContent />
			</div>
		</div>
	);
}

export default HomePage;
