import React, { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import WhitePage from './WhitePage';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// CSS in about.scss

gsap.registerPlugin(TextPlugin);

function ImageSection() {
	const imageRef = useRef();
	const nameRef = useRef();
	const degreeRef = useRef();
	const hobbieRef = useRef();
	let bool = false;
	useEffect(() => {
		const t1 = gsap.timeline({});
		const t2 = gsap.timeline({ progress: 0, paused: true, duration: 2 });

		t1.to([imageRef.current], {
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			scrollTrigger: {
				trigger: [imageRef.current],
				start: 'top 80%',
				end: 'top top',
				onEnter: () => t2.play(),
				scrub: 1,
			},
		});
		t2.add('start');

		t2.to([nameRef.current], { text: 'Name' }, 'start');
		t2.to(
			[degreeRef.current],
			{
				text: 'Degree',
			},
			'start'
		);
		t2.to(
			[hobbieRef.current],
			{
				text: 'Hobbies',
			},
			'start'
		);
	}, []);
	return (
		<div className="ImageSection">
			<LazyLoad height={200}>
				<div className="img">
					<img
						src={
							'https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_720x.jpg?v=1571152418'
						}
						alt=""
					/>
				</div>
			</LazyLoad>
			<div className="about-info" ref={imageRef}>
				<h4> Who am I?</h4>
				<p className="about-text-1">full-stack developper</p>
				<div className="about-details">
					<div className="left-section">
						<p ref={nameRef}></p>
						<p ref={degreeRef}></p>
						<p ref={hobbieRef}></p>
					</div>
					<div className="right-section">
						<p>Eric Ng</p>
						<p>Bachelor of Information Technology and Communication</p>
						<p>MERN, JAMSTACK</p>
						<p>NETWORKING</p>
					</div>
				</div>
				<form method="get" action="file.doc">
					<button type="submit">Download!</button>
				</form>
				<button className="btn-download">Download CV</button>
			</div>
		</div>
	);
}
export default ImageSection;
