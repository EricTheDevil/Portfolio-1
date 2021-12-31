import React, { useRef, useEffect } from 'react';

import CharacterAnim from '../Components/CharacterAnim';
import { gsap } from 'gsap';

import Ring from '../Img/ring.png';
import anime from 'animejs';
import { Visibility } from '@material-ui/icons';

function BlogsPage() {
	const menuRef = useRef();
	const paraOneRef = useRef();
	const paraTwoRef = useRef();
	const buttonsRef = useRef();
	const bottomTextRef = useRef();
	const loadingScreenRef = useRef();
	const logoRef = useRef();
	const loaderRef = useRef();
	const ringOneRef = useRef();
	const loadingScreenTwoRef = useRef();
	const ringTwoRef = useRef();
	const contactRef = useRef();
	const headerRef = useRef();
	const optionsRef = useRef();
	const mediaRef = useRef();
	const oneRef = useRef();
	const twoRef = useRef();
	const ml7ref = useRef();
	const copyrightRef = useRef();
	const t1 = gsap.timeline();

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
			opacity: 1,
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

		gsap.from(logoRef.current, {
			delay: 8.4,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(contactRef.current, {
			delay: 8.5,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(optionsRef.current, {
			delay: 8.4,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(bottomTextRef.current, {
			delay: 8.7,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(copyrightRef.current, {
			delay: 8.9,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(
			mediaRef.current,
			{
				delay: 8.7,
				opacity: 0,
				y: 20,
				ease: 'Power3.easeInOut',
			},
			0.1
		);

		gsap.from(menuRef.current, {
			delay: 8.8,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(paraOneRef.current, {
			delay: 9,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(paraTwoRef.current, {
			delay: 9.2,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(oneRef.current, {
			delay: 9.4,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		gsap.from(twoRef.current, {
			delay: 9.7,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut',
		});

		const timeline = anime.timeline({ loop: false }).add({
			targets: ml7ref,
			translateY: ['1.1em', 0],
			translateX: ['0.55em', 0],
			translateZ: 0,
			rotateZ: [180, 0],
			duration: 750,
			easing: 'easeOutExpo',
			delay: function (el, i) {
				return 9000 + 50 * i;
			},
		});
		// Hides the animation
	}, []);

	return (
		<div className="Blogs">
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

			<div className="logo" ref={logoRef}>
				<ion-icon name="git-compare"></ion-icon>FilesFiddle
			</div>

			<div className="contact" ref={contactRef}>
				GET IN TOUCH
			</div>

			<div className="menu" ref={menuRef}>
				<ion-icon name="options" ref={optionsRef}></ion-icon>
			</div>

			<div className="header" ref={headerRef}>
				<h1 className="ml7" id="title" ref={ml7ref}>
					<span className="text-wrapper">
						<span className="letters">The connected world</span>
					</span>
				</h1>

				<p id="tagline" className="p1" ref={paraOneRef}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
					blanditiis voluptatum, magnam odio, tempora asperiores, quod quasi
					alias expedita esse eveniet impedit nihil quae nulla sint iure
					accusantium architecto aperiam.
				</p>

				<br></br>

				<p id="tagline" className="p2" ref={paraTwoRef}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla facere
					ad illo, perferendis impedit animi quasi iure provident! Iste, facere!
				</p>

				<div className="buttons" ref={buttonsRef}>
					<button id="one" ref={oneRef}>
						LEARN MORE
					</button>
					<button id="two" ref={twoRef}>
						BUY NOW
					</button>
				</div>
				<div className="bottom-text" ref={bottomTextRef}>
					+0.00001db
				</div>

				<div className="copyright" ref={copyrightRef}>
					© 2019 by Codegrid. All rights reserved.
				</div>

				<div className="media" ref={mediaRef}>
					<ul>
						<li>
							<ion-icon name="logo-facebook"></ion-icon>
						</li>
						<li>
							<ion-icon name="logo-instagram"></ion-icon>
						</li>
						<li>
							<ion-icon name="logo-twitter"></ion-icon>
						</li>
						<li>
							<ion-icon name="logo-youtube"></ion-icon>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default BlogsPage;
