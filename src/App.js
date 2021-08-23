import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import Pop from './Components/Pop';
import Header from './Components/Header';
import PreLoader from './Components/PreLoader';
import TimeLine from './Components/TimeLine';
import WhitePage from './Components/WhitePage';

import * as location from './Img/21197-astrolottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultOptions1 = {
	loop: true,
	autoplay: true,
	animationData: location.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const [data, setData] = useState([]);
	const [loading, setloading] = useState(undefined);
	const [completed, setcompleted] = useState(undefined);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	// Fetch data
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

	// Animation

	return (
		<div className="App">
			<title>Eric Ng</title>

			<div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1"></div>
				<div className="lines-2"></div>
				<div className="lines-3"></div>
			</div>
			<Header />

			<div>
				{!loading ? (
					<PreLoader />
				) : (
					<div className="main-content">
						<div className="content">
							<HomePage />
							<AboutPage />
							<TimeLine />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
