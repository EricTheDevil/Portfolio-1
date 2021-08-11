import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import Pop from './Components/Pop';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<div className="App">
			<title>Eric Ng</title>
			<Header />

			<div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
				{' '}
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1"></div>
				<div className="lines-2"></div>
				<div className="lines-3"></div>
			</div>
			<div className="main-content">
				<div className="content">
					<HomePage />
					<AboutPage />
					<PortfoliosPage />
					{/* 
					<Switch>
						<Route path="/" exact></Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Route path="/portfolio" exact>
							<PortfoliosPage />
						</Route>
					</Switch>
					*/}
				</div>
			</div>
		</div>
	);
}

export default App;
