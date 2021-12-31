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

const Test = () => {
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
	function sayHello() {
		alert(nextSlide);
	}
	const [{ background }, set] = useSpring({ background: '#f0f0f0' }, []);
	return (
		<>
			<Grid
				container
				direction="Row"
				className="testimonial-section"
				style={{ background }}>
				<div className="testimonial-container">
					<div onClick={prevSlide} className="arrows left">
						{/*
					<span>
						<img src={leftArrow} alt="left arrow" />
					</span>
					*/}
					</div>

					<Grid item container className="inner">
						<Grid item xs={2} sm={4} md={4} className="t-image">
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
						<Grid item xs={2} sm={4} md={4} className="t-content">
							<ul ref={testimonialList}>
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
				</div>
			</Grid>
		</>
	);
};

export default Test;
