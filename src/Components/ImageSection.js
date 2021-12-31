import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power3 } from 'gsap';
import { Grid } from '@material-ui/core';
import { useSpring } from '@react-spring/core';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

//import { leftArrow, rightArrow, img1, img2, img3 } from './images';
// Assets import
import img1 from '../Img/Eric_Ng.jpg';
import img2 from '../Img/Eric_Ng.jpg';
import img3 from '../Img/Eric_Ng.jpg';

import Blob from '../Components/Blob';
import { a } from '@react-spring/web';

const testimonials = [
	{
		name: '',
		title: 'Wanna know more? Click on the blob!',
		image: img1,
		quote:
			'My name is Eric and I have been programming since Highschool. I like problem solving and working with the latest tools.',
	},
	{
		name: '',
		title: '',
		image: img2,
		quote:
			'Web development and game development are my expertise. Lately been dabbling with web3',
	},
	{
		name: '',
		title: '',
		image: img3,
		quote:
			'Am a avid gamer. Used to play PvP games a lot. Prefer story driven games nowadays.',
	},
	{
		name: '',
		title: '',
		image: img3,
		quote:
			'Am a avid gamer. Used to play PvP games a lot. Prefer story driven games nowadays.',
	},
	{
		name: '',
		title: 'My motto is',
		image: img3,
		quote:
			'Am a avid gamer. Used to play PvP games a lot. Prefer story driven games nowadays.',
	},
];

const ImageSection = () => {
	const imageList = useRef();
	const testimonialList = useRef();

	const imageWidth = 340;

	const [state, setState] = useState({
		isActive1: true,
		isActive2: false,
		isActive3: false,
		isActive4: false,
		isActive5: false,
	});

	useEffect(() => {
		gsap.to(testimonialList.current.children[0], {
			opacity: 1,
		});
	}, []);

	const slideLeft = (index, duration, multiplied = 1) => {
		gsap.to(imageList.current.children[index], {
			x: -imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const slideRight = (index, duration, multiplied = 1) => {
		gsap.to(imageList.current.children[index], {
			x: imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const scale = (index, duration) => {
		gsap.from(imageList.current.children[index], {
			scale: 1.2,
			ease: Power3.easeOut,
		});
	};

	const fadeOut = (index, duration) => {
		gsap.to(testimonialList.current.children[index], {
			opacity: 0,
		});
	};

	const fadeIn = (index, duration) => {
		gsap.to(testimonialList.current.children[index], {
			opacity: 1,
			delay: 1,
		});
	};

	const nextSlide = () => {
		if (imageList.current.children[0].classList.contains('active')) {
			setState({
				isActive1: false,
				isActive2: true,
				isActive3: false,
				isActive4: false,
			});

			slideLeft(0, 1);
			slideLeft(1, 1);
			scale(1, 1);
			slideLeft(2, 1);
			slideLeft(2, 0);

			fadeOut(0, 1);
			fadeIn(1, 1);
		} else if (imageList.current.children[1].classList.contains('active')) {
			setState({
				isActive1: false,
				isActive2: false,
				isActive3: true,
				isActive4: false,
			});

			slideRight(0, 1);
			slideLeft(1, 1, 2);
			slideLeft(2, 1, 2);
			scale(2, 1);

			//content transition
			fadeOut(1, 1);
			fadeIn(2, 1);
		} else if (imageList.current.children[2].classList.contains('active')) {
			setState({
				isActive1: true,
				isActive2: false,
				isActive3: false,
				isActive4: false,
			});

			slideLeft(2, 1, 3);
			slideLeft(0, 1, 0);
			slideLeft(1, 0, 0);
			scale(0, 1);
			//content transition
			fadeOut(2, 1);
			fadeIn(0, 1);
		} else if (imageList.current.children[3].classList.contains('active')) {
			setState({
				isActive1: false,
				isActive2: false,
				isActive3: false,
				isActive4: true,
			});

			slideLeft(0, 1);
			slideLeft(1, 1);
			scale(1, 1);
			slideLeft(2, 1);
			slideLeft(2, 0);

			fadeOut(0, 1);
			fadeIn(1, 1);
		}
	};

	const prevSlide = () => {
		if (imageList.current.children[0].classList.contains('active')) {
			setState({ isActive1: false, isActive3: true });

			slideLeft(2, 0, 3);
			slideLeft(2, 1, 2);
			scale(2, 1);
			slideRight(0, 1);
			slideRight(1, 1);
			//content transtion
			fadeOut(0, 1);
			fadeIn(2, 1);
		} else if (imageList.current.children[1].classList.contains('active')) {
			setState({ isActive2: false, isActive1: true });

			slideLeft(0, 0);
			slideRight(0, 1, 0);
			slideRight(1, 1, 0);
			slideRight(2, 1, 2);
			scale(0, 1);
			//content transtion
			fadeOut(1, 1);
			fadeIn(0, 1);
		} else if (imageList.current.children[2].classList.contains('active')) {
			setState({ isActive3: false, isActive2: true });

			slideLeft(2, 1);
			slideLeft(1, 0, 2);
			slideLeft(1, 1);
			scale(1, 1);
			//content transtion
			fadeOut(2, 1);
			fadeIn(1, 1);
		}
	};

	const [{ background }, set] = useSpring({ background: '#f0f0f0' }, []);
	return (
		<Grid
			container
			direction="Row"
			className="testimonial-section"
			style={{ background }}>
			<Grid xs={12} sm={12} md={12}></Grid>

			<Grid className="testimonial-container" xs={12} sm={12} md={12}>
				<div onClick={prevSlide} className="arrows left">
					{/*
					<span>
						<img src={leftArrow} alt="left arrow" />
					</span>
					*/}
				</div>

				<Grid item container className="inner">
					<Grid item xs={2} sm={6} md={6} className="t-image">
						<ul ref={imageList}>
							<li className={state.isActive1 ? 'active' : ''}>
								<img src={testimonials[0].image} alt={testimonials[0].name} />
							</li>
							<li className={state.isActive2 ? 'active' : ''}>
								<img src={testimonials[1].image} alt={testimonials[1].name} />
							</li>
							<li className={state.isActive3 ? 'active' : ''}>
								<img src={testimonials[2].image} alt={testimonials[2].name} />
							</li>
							<li className={state.isActive4 ? 'active' : ''}>
								<img src={testimonials[3].image} alt={testimonials[3].name} />
							</li>
							<li className={state.isActive5 ? 'active' : ''}>
								<img src={testimonials[4].image} alt={testimonials[4].name} />
							</li>
						</ul>
					</Grid>
					<Grid item xs={2} sm={6} md={6} className="t-content">
						<ul ref={testimonialList}>
							<li className="active">
								<Canvas className="blobCanvas" dpr={[1, 2]}>
									<Blob setBg={nextSlide} />
									<OrbitControls
										enablePan={false}
										enableZoom={false}
										maxPolarAngle={Math.PI / 2}
										minPolarAngle={Math.PI / 2}
									/>
								</Canvas>
							</li>
							<li className={state.isActive1 ? 'active' : ''}>
								<div className="content-inner">
									<p className="quote">{testimonials[0].quote}</p>
									<h3 className="name">{testimonials[0].name}</h3>
									<h4 className="title">{testimonials[0].title}</h4>
								</div>
							</li>
							<li className={state.isActive2 ? 'active' : ''}>
								<div className="content-inner">
									<p className="quote">{testimonials[1].quote}</p>
									<h3 className="name">{testimonials[1].name}</h3>
									<h4 className="title">{testimonials[1].title}</h4>
								</div>
							</li>
							<li className={state.isActive3 ? 'active' : ''}>
								<div className="content-inner">
									<p className="quote">{testimonials[2].quote}</p>
									<h3 className="name">{testimonials[2].name}</h3>
									<h4 className="title">{testimonials[2].title}</h4>
								</div>
							</li>
							<li className={state.isActive4 ? 'active' : ''}>
								<div className="content-inner">
									<p className="quote">{testimonials[3].quote}</p>
									<h3 className="name">{testimonials[3].name}</h3>
									<h4 className="title">{testimonials[3].title}</h4>
								</div>
							</li>
							<li className={state.isActive5 ? 'active' : ''}>
								<div className="content-inner">
									<p className="quote">{testimonials[4].quote}</p>
									<h3 className="name">{testimonials[4].name}</h3>
									<h4 className="title">{testimonials[4].title}</h4>
								</div>
							</li>
						</ul>
					</Grid>
				</Grid>
				{/*
				<div onClick={nextSlide} className="arrows right">
					<span>{<img src={rightArrow} alt="right arrow" />/}</span>
					<button>eeee</button>
					
				</div>
				*/}
			</Grid>
		</Grid>
	);
};
export default ImageSection;

/*import React, { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import WhitePage from './WhitePage';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// CSS in about.scss

import MeImage from '../Img/Mee.jpg';

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
					<img src={MeImage} alt="" />
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
*/
