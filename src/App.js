import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Test from './Pages/Test';
import PortfoliosPage from './Pages/PortfoliosPage';
import Pop from './Components/Pop';
import Header from './Components/Header';
import PreLoader from './Components/PreLoader';
import TimeLine from './Components/TimeLine';
import WhitePage from './Components/WhitePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogsPage from './Pages/BlogsPage';

import { useSpring } from '@react-spring/core';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SunScene from './Components/SunScene';
import LottieAnim from './Components/LottieAnim';
import SkillsPage from './Pages/SkillsPage';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

//GSAP plugin register
gsap.core.globals('ScrollTrigger', ScrollTrigger);
gsap.core.globals('CSSRulePlugin', CSSRulePlugin);
function App() {
	const [navToggle, setNavToggle] = useState(false);

	const [data, setData] = useState([]);
	const [loading, setloading] = useState(undefined);
	const [completed, setcompleted] = useState(undefined);

	const nameRef = useRef();
	const nameRef2 = useRef();

	// https://codesandbox.io/s/responsive-sticky-header-on-scroll-kmk23?file=/src/index.js
	// https://codesandbox.io/s/perlin-cubes-forked-29ftd?file=/src/use-postprocessing.js
	// Fetch data
	/*
	useEffect(() => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					setData(json);
					setloading(true);
					setTimeout(() => {
						setcompleted(true);
					}, 1000);
				});
		}, 2000);
	}, []);
*/
	// Scrolltrigger for Timeline, changes colors for theme
	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.TimeLine',
			start: 'top 50%',
			end: 'bottom 50%',
			//markers: { startColor: 'white', endColor: 'white' },
			scrub: true,
			onEnter: () => ChangeColor(),
			onLeave: () => ChangeColor2(),
			onEnterBack: () => ChangeColor(),
			onLeaveBack: () => ChangeColor2(),
		});
	});
	// Scrolltrigger for About, changes background, changes colors for theme

	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.AboutPage',
			start: 'top 50%',
			end: 'bottom 50%',
			//markers: { startColor: 'white', endColor: 'white' },
			scrub: true,
			onEnter: () => ChangeColor(),
			onLeave: () => ChangeColor2(),
			onEnterBack: () => ChangeColor(),
			onLeaveBack: () => ChangeColor2(),
		});
	});
	const ChangeColor = () => {
		gsap.to('.main-content', { backgroundColor: '#202435' });
		gsap.to('.nav', { backgroundColor: '#10121b' });
	};
	const ChangeColor2 = () => {
		gsap.to('.main-content', { backgroundColor: '#10121b' });
		gsap.to('.nav', { backgroundColor: '#202435' });
	};
	const navClick = () => {
		setNavToggle(!navToggle);
	};

	// Animation
	const [{ background, fill }, set] = useSpring(
		{ background: '#f0f0f0', fill: '#202020' },
		[]
	);

	return (
		<div className="App">
			<title>Eric Ng</title>
			<Header />

			{/*<Canvas className="canvas" dpr={[1, 2]}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
			
				<Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl, size, camera }) => {
          if (size.width < 600) {
            camera.position.z = 45;
          }
          gl.setClearColor(new THREE.Color('#020207'));
        }}>
				<Test />
			</Canvas>
			<div className="sphere"></div>

			{/*
			// for the blob
			<Canvas className="canvas" dpr={[1, 2]}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				
			</Canvas>
			*/}

			<div className="main-content">
				<div className="content">
					<HomePage />

					<AboutPage />
					<SkillsPage />
					<TimeLine />
					<SunScene />
				</div>
			</div>

			<div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1"></div>
				<div className="lines-2"></div>
				<div className="lines-3"></div>
			</div>
			{/* Conditional rendering
			<div>
				{!loading ? (
					<PreLoader />
				) : (
					*/
			/*
				)}
			
			</div>
				*/}
		</div>
	);
}

export default App;
