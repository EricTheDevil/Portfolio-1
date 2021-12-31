import React, { useEffect, useRef, useState } from 'react';

import mountain1 from '../Img/mountain_1.svg';
import mountain2 from '../Img/mountain_2.svg';
import mountain3 from '../Img/mountain_3.svg';
import sun_svg from '../Img/sun.svg';
import cloud1 from '../Img/cloud_1.svg';
import cloud2 from '../Img/cloud_2.svg';
import cloud3 from '../Img/cloud_2.svg';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';
gsap.registerPlugin(ScrollTrigger);

export default function SunScene() {
	let m1 = useRef(null);
	let m2 = useRef(null);
	let m3 = useRef(null);

	let sun = useRef(null);
	let modal = useRef(null);

	let c1 = useRef(null);
	let c2 = useRef(null);
	let c3 = useRef(null);

	const tl = gsap.timeline();

	useEffect(() => {
		tl.to(m1, {
			y: '-40vh',
			scrollTrigger: {
				trigger: m1,
				// markers: true,
				start: 'top-=250 bottom',
				end: 'top-=250 top',
				scrub: 1,
			},
		});

		tl.to(m2, {
			y: '-45vh',
			scrollTrigger: {
				trigger: m2,
				// markers:true,
				scrub: 1.1,
				start: 'top-=300 bottom',
				end: 'top-=300 top',
			},
		});

		tl.to(m3, {
			y: '-5vh',
			scrollTrigger: {
				trigger: m3,
				// markers: true,
				scrub: 1.6,
				start: 'top-=350 bottom',
				end: 'top-=350 top',
			},
		});

		gsap.to(sun, {
			y: '-250',
			opacity: 1,
			scrollTrigger: {
				trigger: sun,
				//markers: true,
				start: 'top-=200 center',
				end: 'top-=200 top',
				scrub: 1.5,
			},
		});
		gsap.to(modal, {
			y: '-250',
			opacity: 1,
			scrollTrigger: {
				trigger: sun,
				// markers: true,
				start: 'top-=250 center',
				end: 'top-=250 top',
				scrub: 1.5,
			},
		});

		gsap.from(c1, {
			x: -1000,
			scrollTrigger: {
				trigger: c1,
				// markers: true,
				scrub: 1.5,
			},
		});

		gsap.from(c2, {
			x: 800,
			scrollTrigger: {
				trigger: c1,
				// markers: true,
				scrub: 1.5,
			},
		});

		gsap.from(c3, {
			x: 1000,
			scrollTrigger: {
				trigger: c1,
				// markers: true,
				scrub: 1.5,
			},
		});
	});
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="scene-container">
			<div className="scene-svg">
				<img ref={(el) => (sun = el)} className="sun" src={sun_svg} alt="sun" />

				<img
					className="cloud1"
					src={cloud1}
					alt="cloud1"
					ref={(el) => (c1 = el)}
				/>
				<img
					className="cloud2"
					src={cloud2}
					alt="cloud2"
					ref={(el) => (c2 = el)}
				/>
				<img
					className="cloud3"
					src={cloud3}
					alt="cloud3"
					ref={(el) => (c3 = el)}
				/>

				<img
					ref={(el) => (m3 = el)}
					className="mountain3"
					src={mountain3}
					alt="mountain"
				/>
				<img
					ref={(el) => (m2 = el)}
					className="mountain2"
					src={mountain2}
					alt="mountain"
				/>
				<img
					ref={(el) => (m1 = el)}
					className="mountain1"
					src={mountain1}
					alt="mountain"
				/>
				<div ref={(el) => (modal = el)} className="ContactModal">
					<Button variant="primary" onClick={handleShow}>
						Click me?
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Contact</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<ContactForm />
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
}
